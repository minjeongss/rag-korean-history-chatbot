import type { NavigateFunction } from "react-router-dom";

export const handleStartListen = (
  setIsListening: React.Dispatch<React.SetStateAction<"text" | "speech">>
) => {
  setIsListening("speech");
};

export const handleStopListen = (
  setIsListening: React.Dispatch<React.SetStateAction<"text" | "speech">>
) => {
  setIsListening("text");
};

export const handleSendClick = (
  location: string,
  navigate: NavigateFunction
) => {
  if (location === "/") {
    navigate("/step");
  }
};
