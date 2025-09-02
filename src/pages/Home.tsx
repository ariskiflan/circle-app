import AddThread from "../components/Addthread";
import Threads from "../components/Threads";

const Home = () => {
  return (
    <div className="w-full ">
      <div className="sticky top-0 pt-10 z-10 bg-[#1d1d1d]">
        <h2 className="text-white text-5xl font-bold px-5 mb-10">Home</h2>
        <AddThread />
      </div>

      <div className="">
        <Threads />
        <Threads />
        <Threads />
        <Threads />
        <Threads />
        <Threads />
      </div>
    </div>
  );
};

export default Home;
