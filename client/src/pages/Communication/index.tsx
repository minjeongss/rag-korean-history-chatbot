import ServiceResponse from "./ServiceResponse";
import UserResponse from "./UserResponse";

const Communication = () => {
  const responses = [
    { type: "user", text: "조선시대 태종 왕자의 난은 왜 일어난거야?" },
    {
      type: "service",
      text: "태종은 자신의 왕권 강화를 위해 형제들을 제거한 사건입니다.",
    },
  ];
  return (
    <div className="flex flex-col p-10 ">
      <ul className="flex flex-col gap-5">
        {responses.map((response, idx) => (
          <li
            key={`${response.text}+${idx}`}
            className={
              idx % 2 === 0 ? "flex justify-end" : "flex justify-start"
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
