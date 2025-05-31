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
      const fetchResponse = async () => {
        const response = await fetch("/step");
        const data = await response.json();
        return data;
      };

      const fetchAndSet = async () => {
        setResponses((prev) => [
          ...prev,
          { type: "user", text: location.state },
        ]);
        const data = await fetchResponse();
        setResponses((prev) => [...prev, { type: data.type, text: data.text }]);
      };

      isMounted.current = true;
      fetchAndSet();
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
