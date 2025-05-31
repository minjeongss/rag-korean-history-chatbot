import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SpeechRecognition: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any;
  }
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const useSpeechRecognition = (
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isListening, setIsListening] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const micRef = useRef<any>(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      alert("이 브라우저는 SpeechRecognition을 지원하지 않습니다.");
      return;
    }

    const mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = true;
    mic.lang = "ko-KR";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mic.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setText(transcript);
    };

    mic.onend = () => {
      if (isListening) {
        mic.start(); // 끊겼으면 자동 재시작
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mic.onerror = (event: any) => {
      console.error("🎙️ Speech recognition error:", event.error);
    };

    micRef.current = mic;
  }, []);

  const startListening = () => {
    if (micRef.current) {
      micRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (micRef.current) {
      micRef.current.stop();
      setIsListening(false);
    }
  };

  return {
    text,
    setText,
    isListening,
    startListening,
    stopListening,
  };
};
