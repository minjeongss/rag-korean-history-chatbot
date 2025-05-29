import type { ServiceTextType } from "../../types/Response";
interface ServiceResponseProps {
  text: ServiceTextType;
}

const ServiceResponse = ({ text }: ServiceResponseProps) => {
  return (
    <div className="w-[39.31rem] h-auto flex flex-col gap-6 p-10 rounded-[16px] bg-[#FFFFFF]">
      <div>{text.summary}</div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">{text.index + 1}번째 질문</div>
        <div>{text.question}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">힌트</div>
        <div className="flex flex-row gap-2">
          {text.hints.map((hint, index) => (
            <span
              key={`${hint}+${index}`}
              className="p-2 rounded-[16px] bg-[#8FBF3D]/30"
            >
              {hint}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceResponse;
