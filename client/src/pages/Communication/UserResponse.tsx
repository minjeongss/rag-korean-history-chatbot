const UserResponse = ({ text }: { text: string }) => {
  return (
    <div className="w-[39.31rem] h-auto flex justify-center items-center p-4 rounded-[50px] bg-[#CCCCCC]/25">
      {text}
    </div>
  );
};

export default UserResponse;
