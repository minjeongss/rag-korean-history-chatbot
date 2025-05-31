const Header = () => {
  return (
    <div className="w-3/5 h-[500px] flex flex-row justify-center items-center bg-[url('/src/assets/images/star.png')] bg-contain bg-no-repeat relative">
      <div className="absolute bottom-30 text-center bg-[#FAFAFA]">
        <p className="text-3xl">
          <span className=" font-medium">역사가 흐르고 있어,</span>
          <span className="font-semibold">지혜로운 친구야!</span>
        </p>
        <p className="text-2xl font-medium">오늘도 함께 한국사를 탐구해볼까?</p>
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
