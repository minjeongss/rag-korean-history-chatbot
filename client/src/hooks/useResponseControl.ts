import { useState } from "react";
import type {
  ServiceResponseType,
  SummaryResponseType,
  UserResponseType,
} from "../types/Response";

export const useResponseControl = () => {
  const [responses, setResponses] = useState<
    (UserResponseType | ServiceResponseType | SummaryResponseType)[]
  >([]);

  const handleSubmit = (userResponse: string) => {
    setResponses((prev) => [...prev, { type: "user", text: userResponse }]);
    setResponses((prev) => [
      ...prev,
      {
        type: "service",
        text: {
          index: 0,
          summary: "조선시대 태종 왕자의 난에 대한 간략한 요약입니다.",
          question: "태종 왕자의 난은 왜 일어났나요?",
          hints: [
            "왕권 강화를 위한 내부 갈등",
            "왕자의 권력 다툼",
            "정치적 음모와 반란",
          ],
        },
      },
    ]);
  };

  return {
    responses,
    setResponses,
    handleSubmit,
  };
};
