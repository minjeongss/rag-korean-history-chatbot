import type {
  ServiceResponseType,
  SummaryResponseType,
  UserResponseType,
} from "../../types/Response";
import ServiceResponse from "./ServiceResponse";
import SummaryResponse from "./SummaryResponse";
import UserResponse from "./UserResponse";

const Communication = () => {
  const responses: (
    | UserResponseType
    | ServiceResponseType
    | SummaryResponseType
  )[] = [
    { type: "user", text: "조선시대 태종 왕자의 난은 왜 일어난거야?" },
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
    {
      type: "summary",
      text: {
        questionSummary: "조선 태종의 왕자의 난에 대한 질문입니다.",
        responseSummary:
          "태종은 왕권 강화를 위해 형제들을 제거하며 왕자의 난을 일으켰습니다.",
        thoughtProcess: [
          "이성계 정치권 위임 이성계 정치권 위임이성계 정치권 위임",
          "정도전 권력 장악정도전 권력 장악정도전 권력 장악정도전 권력 장악",
          "이방원 권력 획득이방원 권력 획득 권력 획득 권력 획득 권력 획득",
        ],
        keywords: ["조선", "태종", "왕자의 난", "왕권 강화", "형제 제거"],
      },
    },
  ];
  return (
    <div className="flex flex-col p-10 ">
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
    </div>
  );
};

export default Communication;
