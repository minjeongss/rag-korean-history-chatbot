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
  return {
    responses,
    setResponses,
  };
};
