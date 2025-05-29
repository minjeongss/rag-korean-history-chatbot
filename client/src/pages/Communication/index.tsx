import Input from "../../components/Input";
import { responses } from "../../mocks/Responses";
import ServiceResponse from "./ServiceResponse";
import SummaryResponse from "./SummaryResponse";
import UserResponse from "./UserResponse";

const Communication = () => {
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
        <Input width={100} />
      </div>
    </div>
  );
};

export default Communication;
