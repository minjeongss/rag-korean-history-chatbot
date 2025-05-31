import { useLocation } from "react-router-dom";
import Input from "../../components/Input";
import ServiceResponse from "./ServiceResponse";
import SummaryResponse from "./SummaryResponse";
import { useEffect, useRef } from "react";
import { useResponseControl } from "../../hooks/useResponseControl";
import UserResponse from "./UserResponse";

const Communication = () => {
  const { responses, setResponses, handleSubmit } = useResponseControl();
  const location = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      setResponses((prev) => [...prev, { type: "user", text: location.state }]);
      setResponses((prev) => [
        ...prev,
        {
          type: "service",
          text: {
            index: 0,
            summary: "조선시대 태종 왕자의 난에 대한 간략한 요약입니다.",
            question: "태종 왕자의 난은 왜 일어났나요?",
            hints: [
              "왕권 강화를 위한 내부 갈등",
              "왕자의 권력 다툼",
              "정치적 음모와 반란",
            ],
          },
        },
      ]);
    }
  }, []);

  return (
    <div className="flex flex-col p-20">
      <ul className="flex flex-col gap-5">
        {responses.map((response, index) => (
          <li
            key={`${response.type}+${index}`}
            className={
              index % 2 === 0 ? "flex justify-end" : "flex justify-start"
            }
          >
            {response.type === "user" && <UserResponse text={response.text} />}
            {response.type === "service" && (
              <ServiceResponse text={response.text} />
            )}
            {response.type === "summary" && (
              <SummaryResponse text={response.text} />
            )}
          </li>
        ))}
      </ul>
      <div className="w-auto h-[140px]" />
      <div className="fixed left-0 right-0 bottom-0 px-20 pb-5 bg-[#FAFAFA]">
        <Input width={100} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Communication;
