import type { NavigateFunction } from "react-router-dom";

export const handleSendClick = (
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.TouchEvent<HTMLButtonElement>,
  location: string,
  navigate: NavigateFunction
) => {
  if (location === "/") {
    navigate("/step");
  }
};

export const handleVoiceClick = (event) => {};

export const handleStopClick = (event) => {};
