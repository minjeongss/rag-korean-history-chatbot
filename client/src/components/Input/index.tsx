import Button from "../Button";

const Input = () => {
  return (
    <div className="w-4/5 h-32 flex flex-col bg-[#FFFFFF] p-4 rounded-[16px] border border-2 border-[#CCCCCC]">
      <textarea name="question" rows={5} className=" resize-none" />
      <div className="flex flex-row justify-end gap-4">
        <Button imgSrc="/src/assets/images/voice.png" />
        <Button imgSrc="/src/assets/images/send.png" />
      </div>
    </div>
  );
};

export default Input;
