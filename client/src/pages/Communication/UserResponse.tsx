import { useFadeIn } from "../../hooks/useFadeIn";

const UserResponse = ({ text }: { text: string }) => {
  const { show } = useFadeIn();

  return (
    <div
      className={`
      max-w-[39.31rem] w-auto h-auto flex justify-center items-center p-4 rounded-[50px] bg-[#CCCCCC]/25
      transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {text}
    </div>
  );
};

export default UserResponse;
