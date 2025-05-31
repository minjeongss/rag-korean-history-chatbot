import { useLocation } from "react-router-dom";
import Input from "../../components/Input";
import ServiceResponse from "./ServiceResponse";
import SummaryResponse from "./SummaryResponse";
import { useEffect, useRef } from "react";
import { useResponseControl } from "../../hooks/useResponseControl";
import UserResponse from "./UserResponse";
import { useResponseMutation } from "../../hooks/useResponseMutation";

const Communication = () => {
  const { responses, setResponses } = useResponseControl();
  const location = useLocation();
  const isMounted = useRef(false);
  const { mutate } = useResponseMutation(setResponses);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      mutate(location.state);
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
        <Input width={100} mutate={mutate} />
      </div>
    </div>
  );
};

export default Communication;
