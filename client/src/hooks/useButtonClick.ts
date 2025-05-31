import type { NavigateFunction } from "react-router-dom";

export const handleFirstResponse = (
  text: string,
  navigate: NavigateFunction
) => {
  if (text.trim() === "") return;
  navigate("/step", { state: text });
};

export const handleStepResponse = (
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (userResponse: string) => void
) => {
  handleSubmit(text);
  setText("");
};
