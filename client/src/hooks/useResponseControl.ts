import { useState } from "react";
import type { ResponseType } from "../types/Response";

export const useResponseControl = () => {
  const [responses, setResponses] = useState<ResponseType[]>([]);

  return {
    responses,
    setResponses,
  };
};
