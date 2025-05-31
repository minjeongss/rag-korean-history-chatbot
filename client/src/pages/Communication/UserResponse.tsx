const UserResponse = ({ text }: { text: string }) => {
  return (
    <div className="max-w-[39.31rem] w-auto h-auto flex justify-center items-center p-4 rounded-[50px] bg-[#CCCCCC]/25">
      {text}
    </div>
  );
};

export default UserResponse;
