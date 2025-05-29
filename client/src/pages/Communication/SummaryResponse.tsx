import type { SummaryTextType } from "../../types/Response";

interface SummaryResponseProps {
  text: SummaryTextType;
}

const SummaryResponse = ({ text }: SummaryResponseProps) => {
  return (
    <div className="w-full h-auto flex flex-col gap-6 p-10 rounded-[16px] bg-[#FFFFFF]">
      <div>{text.questionSummary}</div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">요약</p>
        <div>{text.responseSummary}</div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">사고 과정</p>
        <div className="flex flex-row justify-between items-center gap-2">
          {text.thoughtProcess.map((thought, index) => (
            <>
              <div className="w-auto p-3 rounded-[16px] bg-[#8FBF3D]/30">
                {thought}
              </div>
              {index !== text.thoughtProcess.length - 1 && (
                <img
                  className="w-[40px] h-auto shrink-0"
                  src="/src/assets/images/progress.png"
                  alt="arrow"
                />
                // <div>*</div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">키워드 정리</div>
        <div className="flex flex-col gap-1">
          {text.keywords.map((keyword) => (
            <div>&middot; {keyword}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryResponse;
