import { useEffect, useState } from "react";
import AddThread from "../components/Addthread";
import Threads from "../components/Threads";
import type { IThread } from "../types/app";
import { getThreads } from "../services/call/threads";

const Home = () => {
  const [threads, setThreads] = useState<IThread[]>([]);

  const handleGetThreads = async () => {
    const res = await getThreads();
    setThreads(res.data.data);
    console.log(res);
  };

  useEffect(() => {
    handleGetThreads();
  }, []);

  return (
    <div className="w-full ">
      <div className="sticky top-0 pt-10 z-10 bg-[#1d1d1d]">
        <h2 className="text-white text-5xl font-bold px-5 mb-10">Home</h2>
        <AddThread />
      </div>

      <div className="">
        {threads.map((item) => (
          <div key={item.id}>
            <Threads thread={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
