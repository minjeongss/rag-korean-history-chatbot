export type ResponseType =
  | UserResponseType
  | ServiceResponseType
  | SummaryResponseType;

export interface UserResponseType {
  type: "user";
  text: string;
}

export interface ServiceResponseType {
  type: "service";
  text: ServiceTextType;
}

export interface SummaryResponseType {
  type: "summary";
  text: SummaryTextType;
}

export interface ServiceTextType {
  index: number;
  summary: string;
  question: string;
  hints: string[];
}

export interface SummaryTextType {
  questionSummary: string;
  responseSummary: string;
  thoughtProcess: string[];
  keywords: string[];
}
