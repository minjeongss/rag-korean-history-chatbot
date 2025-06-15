import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ResponseType, ServiceTextType } from "../types/Response";
import type { Error } from "../types/Error";
import { useState } from "react";

export const useResponseMutation = () => {
  const queryClient = useQueryClient();
  const [stepCount, setStepCount] = useState(2);
  const url =
    import.meta.env.DEV === true
      ? stepCount <= 3
        ? `step/${stepCount}`
        : "summary"
      : `${import.meta.env.VITE_API_URL}/question`;
  const { mutate, error, isError } = useMutation({
    mutationKey: ["response"],
    mutationFn: async (text: string) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ question: text }),
      });

      if (!response.ok) {
        if (response.status === 400 || response.status === 500) {
          const errorMessage: Error = await response.json();
          throw new Error(JSON.stringify(errorMessage));
        } else {
          throw new Error(
            "자료를 찾는 데 문제가 생겼어. 다시 한 번 물어봐줄래?"
          );
        }
      }
      return response.json();
    },
    onMutate: async (text) => {
      // 과거에 보낸 fetch 요청 중단
      await queryClient.cancelQueries({ queryKey: ["response"] });
      // rollback을 대비한 현재 버전 값 저장
      const prevResponse = queryClient.getQueryData(["response"]);
      // 낙관적 업데이트로 캐시 조작
      if (prevResponse) {
        queryClient.setQueryData(["response"], (prev: ResponseType[]) => [
          ...prev,
          { type: "user", text },
          {
            type: "service",
            text: {
              index: -2,
              summary: "한국사를 열심히 찾는 중이야! 잠깐만 기다려줘-!",
              question: "",
              hints: [],
            },
          },
        ]);
      }
      return { prevResponse };
    },
    onSuccess: (data) => {
      // 캐시 정상 값 업데이트
      queryClient.setQueryData(["response"], (prev: ResponseType[]) => [
        ...prev.filter(
          (res) =>
            !(
              res.type === "service" &&
              (res.text as ServiceTextType).index === -2
            )
        ),
        {
          type: data.type,
          text: data.text,
        },
      ]);
      setStepCount((prev) => prev + 1);
    },
    onError: (error) => {
      let message = "";
      try {
        const parsed = JSON.parse(error.message);
        if (parsed?.message) {
          message = parsed.message;
        }
      } catch {
        message = "통신하는 데 문제가 생겼어. 다시 한 번 물어봐줄래?";
      }

      // 캐시 오류 업데이트
      queryClient.setQueryData(["response"], (prev: ResponseType[]) => [
        ...prev.filter(
          (res) =>
            !(
              res.type === "service" &&
              (res.text as ServiceTextType).index === -2
            )
        ),
        {
          type: "service",
          text: {
            index: -1,
            summary: message,
            question: "",
            hints: [],
          },
        },
      ]);
    },
    onSettled: () => {
      // 수동으로 캐시를 업데이트 해주기에 리패치 로직 해제
      // queryClient.invalidateQueries({ queryKey: ["response"] });
    },
    gcTime: 1000 * 60 * 5, // 5분
  });

  return {
    mutate,
    error,
    isError,
  };
};
