import Input from "../../components/Input";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#FAFAFA]">
      <div className="flex flex-col justify-start items-center">
        <div className="w-4/5 h-[500px] flex flex-row justify-center items-center bg-[url('/src/assets/star.png')] bg-contain bg-no-repeat relative">
          <div className="absolute bottom-30 text-center bg-[#FAFAFA]">
            <p>
              <span>역사가 흐르는 날이에요,</span>
              <span>지혜로운 벗님</span>
            </p>
            <p>오늘도 한국사를 탐구해볼까요?</p>
          </div>
          <img
            className="w-[120px] h-auto absolute bottom-4 right-18"
            src={"/src/assets/boy.png"}
            alt="boy"
          />
        </div>
        <Input />
      </div>
    </div>
  );
};

export default Home;
