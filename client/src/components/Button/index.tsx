const Button = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <button className="w-10 h-10 p-2 flex justify-center items-center rounded-[10px] bg-[#8FBF3D]/50">
      <img
        src={imgSrc}
        alt="button"
        className="max-w-full max-h-full object-contain"
      />
    </button>
  );
};

export default Button;
