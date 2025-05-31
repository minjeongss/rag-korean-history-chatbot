import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { SetStateAction } from "react";
import type { ResponseType, ServiceTextType } from "../types/Response";

export const useResponseMutation = (
  setResponses: React.Dispatch<SetStateAction<ResponseType[]>>
) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending, isError } = useMutation({
    mutationKey: ["response"],
    mutationFn: async (text: string) => {
      const response = await fetch("http://44.221.176.144:8080/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    gcTime: 1000 * 60 * 5, // 5분

    onMutate: async (text) => {
      setResponses((prev) => [
        ...prev,
        { type: "user", text },
        {
          type: "service",
          text: {
            index: -1,
            summary: "한국사를 열심히 찾는 중이야! 잠깐만 기다려줘-!",
            question: "",
            hints: [],
          },
        },
      ]);
      await queryClient.cancelQueries({ queryKey: ["response"] });
      const prevResponse = queryClient.getQueryData(["response"]);
      if (prevResponse) {
        queryClient.setQueryData(["response"], (prev) => [...prev, text]);
      }

      return { prevResponse };
    },

    onSuccess: (data) => {
      setResponses((prev) => [
        ...prev.filter(
          (res) =>
            !(
              res.type === "service" &&
              (res.text as ServiceTextType).index === -1
            )
        ),
        { type: data.type, text: data.text },
      ]);
    },
    onError: (error) => {
      setResponses((prev) => [
        ...prev.filter(
          (res) =>
            !(
              res.type === "service" &&
              (res.text as ServiceTextType).index === -1
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
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["response"] });
    },
    retry: 3,
    retryDelay: 500,
  });

  return {
    mutate,
    error,
    isPending,
    isError,
  };
};
