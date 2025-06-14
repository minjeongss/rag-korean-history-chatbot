import boyImage from "/src/assets/images/boy.png";
import starImage from "/src/assets/images/star.png";

const Header = () => {
  return (
    <div
      className="w-3/5 h-[500px] flex flex-row justify-center items-center bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url(${starImage})` }}
    >
      <div className="absolute bottom-30 text-center bg-[#FAFAFA]">
        <p className="text-3xl">
          <span className=" font-medium">역사가 흐르고 있어,</span>
          <span className="font-semibold">지혜로운 친구야!</span>
        </p>
        <p className="text-2xl font-medium">오늘도 함께 한국사를 탐구해볼까?</p>
      </div>
      <img
        className="w-[120px] h-auto absolute bottom-4 right-18"
        src={boyImage}
        alt="boy"
      />
    </div>
  );
};

export default Header;
