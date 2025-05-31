import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { SetStateAction } from "react";
import type { ResponseType } from "../types/Response";

export const useResponseMutation = (
  setResponses: React.Dispatch<SetStateAction<ResponseType[]>>
) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending, isError } = useMutation({
    mutationKey: ["response"],
    mutationFn: async (text: string) => {
      const response = await fetch("/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) throw new Error("응답 중 에러 발생!");
      return response.json();
    },
    onMutate: async (text) => {
      setResponses((prev) => [...prev, { type: "user", text: text }]);
      //   await queryClient.cancelQueries({
      //     queryKey: ["response"],
      //   });
      //   const prevResponse = queryClient.getQueryData(["response"]);
      //   if(prevResponse){
      //     queryClient.setQueryData([])
      //   }
    },
    onSuccess: (data) => {
      setResponses((prev) => [...prev, { type: data.type, text: data.text }]);
      queryClient.invalidateQueries({ queryKey: ["response"] });
    },
    onError: () => {},
    onSettled: () => {},
    retry: 3,
    retryDelay: 500, //0.5s 간격으로 재시도
  });
  return {
    mutate,
    error,
    isPending,
    isError,
  };
};
