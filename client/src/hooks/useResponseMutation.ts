import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ResponseType, ServiceTextType } from "../types/Response";

export const useResponseMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, error, isError } = useMutation({
    mutationKey: ["response"],
    mutationFn: async (text: string) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ question: text }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `에러 발생! 상태 코드: ${response.status}, 내용: ${errorMessage}`
        );
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
    },
    onError: (error) => {
      console.log(error);
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
            summary: "자료를 찾는 데 문제가 생겼어. 다시 한 번 물어봐줄래?",
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
    retry: 1,
    retryDelay: 500,
  });

  return {
    mutate,
    error,
    isError,
  };
};
