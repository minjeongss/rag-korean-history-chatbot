import { useState } from "react";
import Button from "../Button";

const Input = ({ width = 60 }) => {
  const [mode, setMode] = useState<"text" | "voice">("text");
  return (
    <div
      style={{ width: `${width}%`, maxWidth: `${width}%` }}
      className="h-35 flex flex-col gap-4 bg-[#FFFFFF] p-4 rounded-[16px] border border-2 border-[#CCCCCC] shadow-xl"
    >
      <textarea
        name="question"
        rows={10}
        className="flex-grow resize-none outline-none"
      />
      <div className="flex flex-row justify-end items-end gap-4">
        {mode === "text" ? (
          <>
            <Button imgSrc="/src/assets/images/voice.png" />
            <Button imgSrc="/src/assets/images/send.png" />
          </>
        ) : (
          <Button imgSrc="/src/assets/images/stop.png" />
        )}
      </div>
    </div>
  );
};

export default Input;
