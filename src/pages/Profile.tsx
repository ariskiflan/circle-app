import { assets } from "../assets/assets";
import { Link, useParams } from "react-router-dom";
import type { IThread, IUser } from "../types/app";
import { useEffect, useState } from "react";
import { getThreadByUserId } from "../services/call/threads";
import Threads from "../components/Threads";
import { getUser } from "../services/call/user";

const Profile = () => {
  const { id } = useParams();

  const [threadsByUserId, setThreadsByUserId] = useState<IThread[]>([]);
  const [userById, setUserById] = useState<IUser>();
  const [activeTab, setActiveTab] = useState("all");

  const handleGetUserById = async () => {
    try {
      const res = await getUser(Number(id));

      setUserById(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetThreadsByUserId = async () => {
    try {
      const res = await getThreadByUserId(Number(id));
      setThreadsByUserId(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUserById();
    handleGetThreadsByUserId();
  }, []);

  return (
    <>
      <div>
        <div className="sticky top-0 bg-[#1d1d1d] z-10">
          <div className="p-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Link to={"/"}>
                <img src={assets.Back} alt="" className="w-10" />
              </Link>

              <p className="text-2xl font-semibold">{userById?.fullname}</p>
            </div>

            <div className="relative">
              <div className=" w-full h-[100px] rounded-2xl bg-green-500"></div>
              <div className="w-20 h-20 rounded-full bg-gray-400 border-4 border-black absolute bottom-[-40px] left-[30px] object-cover">
                <img src={userById?.profile?.avatar} alt="" />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="flex border-2 border-white py-2 px-4 rounded-2xl text-white font-semibold">
                Edit Profile
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">{userById?.fullname}</p>
              <span className="text-gray-400 font-semibold text-md">
                @{userById?.username}
              </span>
              <p className="text-md font-normal">{userById?.profile?.bio}</p>

              <div className="flex items-center gap-5">
                <p className="text-md font-semibold">
                  {userById?.following?.length}{" "}
                  <span className="text-gray-400 font-normal">Following</span>
                </p>
                <p className="text-md font-semibold">
                  {userById?.follower?.length}{" "}
                  <span className="text-gray-400 font-normal">
                    Followers
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-center items-center">
            <p
              onClick={() => setActiveTab("all")}
              className={`relative text-xl cursor-pointer px-4 py-2 text-center border-b-2 ${
                activeTab === "all"
                  ? "border-gray-500 font-bold text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-1 after:bg-green-500 after:rounded-lg"
                  : "border-gray-500 font-normal"
              }`}
            >
              All Post
            </p>
            <p
              onClick={() => setActiveTab("media")}
              className={`relative text-xl cursor-pointer px-4 py-2 text-center border-b-2 ${
                activeTab === "media"
                  ? "border-gray-500 font-bold text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-1 after:bg-green-500 after:rounded-lg"
                  : "border-gray-500 font-normal"
              }`}
            >
              Media
            </p>
          </div>
        </div>

        <div className="">
          {activeTab === "all" ? (
            <div>
              {threadsByUserId.map((item) => (
                <div key={item.id}>
                  <Threads
                    thread={item}
                    handleGetThreads={handleGetThreadsByUserId}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 p-5">
              {threadsByUserId.map((thread) =>
                thread.image?.map((img) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt="media"
                    className="w-full"
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
