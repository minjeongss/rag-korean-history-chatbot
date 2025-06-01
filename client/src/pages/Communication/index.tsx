import { useLocation } from "react-router-dom";
import Input from "../../components/Input";
import ServiceResponse from "./ServiceResponse";
import SummaryResponse from "./SummaryResponse";
import { useEffect, useRef } from "react";
import UserResponse from "./UserResponse";
import { useResponseMutation } from "../../hooks/useResponseMutation";
import { useQuery } from "@tanstack/react-query";
import type { ResponseType } from "../../types/Response";

const Communication = () => {
  const location = useLocation();
  const isMounted = useRef(false);

  const { data, isPending } = useQuery<ResponseType[]>({
    queryKey: ["response"],
    queryFn: () => Promise.resolve([]),
    initialData: [],
    staleTime: Infinity,
    gcTime: 1000 * 60 * 5,
  });
  const { mutate } = useResponseMutation();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      mutate(location.state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col p-20">
      <ul className="flex flex-col gap-5">
        {data.map((response, index) => (
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
        <Input width={100} mutate={mutate} isPending={isPending} />
      </div>
    </div>
  );
};

export default Communication;
