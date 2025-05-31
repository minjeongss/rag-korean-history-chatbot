const Button = ({
  imgSrc,
  onClick,
  disabled = false,
}: {
  imgSrc: string;
  onClick: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 p-2 flex justify-center items-center rounded-[10px] bg-[#8FBF3D]/50"
      disabled={disabled}
    >
      <img
        src={imgSrc}
        alt="button"
        className="max-w-full max-h-full object-contain"
      />
    </button>
  );
};

export default Button;
