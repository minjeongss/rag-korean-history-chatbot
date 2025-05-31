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
  };

  return {
    responses,
    setResponses,
    handleSubmit,
  };
};
