import { useState } from "react";
import Button from "../Button";
import {
  handleSendClick,
  handleStopClick,
  handleVoiceClick,
} from "../../hooks/useButtonClick";
import { useLocation, useNavigate } from "react-router-dom";

const Input = ({ width = 60 }) => {
  const [mode, setMode] = useState<"text" | "voice">("text");
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      style={{ width: `${width}%`, maxWidth: `${width}%` }}
      className="h-35 flex flex-col gap-4 bg-[#FFFFFF] p-4 rounded-[16px] border border-2 border-[#CCCCCC] shadow-lg"
    >
      <textarea
        name="question"
        rows={10}
        className="flex-grow resize-none outline-none"
      />
      <div className="flex flex-row justify-end items-end gap-4">
        {mode === "text" ? (
          <>
            <Button
              onClick={(event) => handleVoiceClick(event)}
              imgSrc="/src/assets/images/voice.png"
            />
            <Button
              onClick={(event) =>
                handleSendClick(event, location.pathname, navigate)
              }
              imgSrc="/src/assets/images/send.png"
            />
          </>
        ) : (
          <Button
            onClick={(event) => handleStopClick(event)}
            imgSrc="/src/assets/images/stop.png"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
