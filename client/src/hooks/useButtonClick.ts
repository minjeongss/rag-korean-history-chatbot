import type { NavigateFunction } from "react-router-dom";

export const handleSendClick = (
  text: string,
  location: string,
  navigate: NavigateFunction
) => {
  if (text.trim() === "") return;
  if (location === "/") {
    navigate("/step", { state: text });
  }
};
