import { useState } from "react";
import type {
  ServiceResponseType,
  SummaryResponseType,
  UserResponseType,
} from "../types/Response";
import { getResponse } from "../api";

export const useResponseControl = () => {
  const [responses, setResponses] = useState<
    (UserResponseType | ServiceResponseType | SummaryResponseType)[]
  >([]);

  const handleSubmit = (userResponse: string) => {
    getResponse(setResponses, userResponse);
  };

  return {
    responses,
    setResponses,
    handleSubmit,
  };
};
