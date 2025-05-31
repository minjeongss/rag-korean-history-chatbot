import type {
  ServiceResponseType,
  SummaryResponseType,
  UserResponseType,
} from "../types/Response";

export const getResponse = async (
  setResponses: React.Dispatch<
    React.SetStateAction<
      (UserResponseType | ServiceResponseType | SummaryResponseType)[]
    >
  >,
  text: string
) => {
  setResponses((prev) => [...prev, { type: "user", text: text }]);
  const response = await fetch("/summary");
  const data = await response.json();
  setResponses((prev) => [...prev, { type: data.type, text: data.text }]);
};
