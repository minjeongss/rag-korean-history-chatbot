import type {
  ServiceResponseType,
  UserResponseType,
} from "../../types/Response";
import ServiceResponse from "./ServiceResponse";
import UserResponse from "./UserResponse";

const Communication = () => {
  const responses: (UserResponseType | ServiceResponseType)[] = [
    { type: "user", text: "조선시대 태종 왕자의 난은 왜 일어난거야?" },
    {
      type: "service",
      text: {
        index: 0,
        summary: "A",
        question: "B",
        hints: ["CCCCCCCCCCCCCCcc", "D", "E"],
      },
    },
    { type: "user", text: "조선시대 태종 왕자의 난은 왜 일어난거야?" },
    {
      type: "service",
      text: {
        index: 0,
        summary: "A",
        question: "B",
        hints: ["C", "D", "E"],
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
            {response.type === "user" ? (
              <UserResponse text={response.text} />
            ) : (
              <ServiceResponse text={response.text} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communication;
