const Button = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <button className="w-12 h-12 p-2 flex justify-center items-center rounded-[16px] bg-[rgba(143,191,61,0.3)]">
      <img
        src={imgSrc}
        alt="button"
        className="max-w-full max-h-full object-contain"
      />
    </button>
  );
};

export default Button;
