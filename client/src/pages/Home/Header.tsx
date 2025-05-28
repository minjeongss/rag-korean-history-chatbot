const Header = () => {
  return (
    <div className="w-4/5 h-[500px] flex flex-row justify-center items-center bg-[url('/src/assets/images/star.png')] bg-contain bg-no-repeat relative">
      <div className="absolute bottom-30 text-center bg-[#FAFAFA]">
        <p className="text-[38px]">
          <span className=" font-medium">역사가 흐르는 날이에요,</span>
          <span className="font-semibold">지혜로운 벗님</span>
        </p>
        <p className="text-3xl font-medium">오늘도 한국사를 탐구해볼까요?</p>
      </div>
      <img
        className="w-[120px] h-auto absolute bottom-4 right-18"
        src={"/src/assets/images/boy.png"}
        alt="boy"
      />
    </div>
  );
};

export default Header;
