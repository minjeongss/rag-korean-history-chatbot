import React from "react";
import type { SummaryTextType } from "../../types/Response";
import { useFadeIn } from "../../hooks/useFadeIn";
import progressImage from "/src/assets/images/progress.png";
interface SummaryResponseProps {
  text: SummaryTextType;
}

const SummaryResponse = ({ text }: SummaryResponseProps) => {
  const { show } = useFadeIn();
  return (
    <div
      className={`
      w-full h-auto flex flex-col gap-6 p-10 rounded-[16px] bg-[#FFFFFF]
      transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div>{text.questionSummary}</div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">요약</p>
        <div>{text.responseSummary}</div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">사고 과정</p>
        <div className="flex flex-row justify-between items-center gap-2">
          {text.thoughtProcess.map((thought, index) => (
            <React.Fragment key={`${thought}${index}`}>
              <div className="w-auto p-3 rounded-[16px] bg-[#8FBF3D]/30">
                {thought}
              </div>
              {index !== text.thoughtProcess.length - 1 && (
                <img
                  className="w-[40px] h-auto shrink-0"
                  src={progressImage}
                  alt="arrow"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">키워드 정리</div>
        <div className="flex flex-col gap-1">
          {text.keywords.map((keyword, index) => (
            <div key={`${keyword}${index}`}>&middot; {keyword}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryResponse;
