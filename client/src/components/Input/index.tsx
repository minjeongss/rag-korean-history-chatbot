import { useState } from "react";
import Button from "../Button";
import {
  handleFirstResponse,
  handleStepResponse,
} from "../../hooks/useButtonClick";
import { useLocation, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";

const Input = ({
  width = 60,
  handleSubmit,
}: {
  width: number;
  handleSubmit: (useResponse: string) => void;
}) => {
  const [text, setText] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const { isListening, startListening, stopListening } = useSpeechRecognition(
    text,
    setText
  );

  return (
    <div
      style={{ width: `${width}%`, maxWidth: `${width}%` }}
      className="h-35 flex flex-col gap-4 bg-[#FFFFFF] p-4 rounded-[16px] border border-2 border-[#CCCCCC] shadow-lg"
    >
      <textarea
        name="question"
        rows={10}
        className="flex-grow resize-none outline-none"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="flex flex-row justify-end items-end gap-4">
        {isListening === false ? (
          <>
            <Button
              onClick={startListening}
              imgSrc="/src/assets/images/voice.png"
            />
            <Button
              onClick={() =>
                location.pathname === "/"
                  ? handleFirstResponse(text, navigate)
                  : handleStepResponse(text, setText, handleSubmit)
              }
              imgSrc="/src/assets/images/send.png"
            />
          </>
        ) : (
          <Button
            onClick={stopListening}
            imgSrc="/src/assets/images/stop.png"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
