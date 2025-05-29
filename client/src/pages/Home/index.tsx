import Input from "../../components/Input";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-start items-center">
        <Header />
        <Input />
      </div>
    </div>
  );
};

export default Home;
