export interface UserResponseType {
  type: "user";
  text: string;
}

export interface ServiceResponseType {
  type: "service";
  text: ServiceTextType;
}

export interface ServiceTextType {
  index: number;
  summary: string;
  question: string;
  hints: string[];
}
