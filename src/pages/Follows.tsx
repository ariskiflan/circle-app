import { useEffect, useState } from "react";
import { getFollower, getFollowing } from "../services/call/follow";
import type { IUser } from "../types/app";
import ListFollows from "../components/ListFollows";

const Follows = () => {
  const [activeTab, setActiveTab] = useState("followers");
  const [followers, setFollowers] = useState<IUser[]>([]);
  const [following, setFollowing] = useState<IUser[]>([]);

  const handleFollowers = async () => {
    try {
      const res = await getFollower();
      setFollowers(res.data);
    } catch (error) {
      console.log(error);
    }

    setActiveTab("followers");
  };

  const handleFollowing = async () => {
    try {
      const res = await getFollowing();
      setFollowing(res.data);
    } catch (error) {
      console.log(error);
    }

    setActiveTab("followers");
  };

  useEffect(() => {
    handleFollowers();
    handleFollowing();
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 justify-center items-center py-10">
          <p
            onClick={() => setActiveTab("followers")}
            className={`relative text-xl cursor-pointer px-4 py-2 text-center border-b-2 ${
              activeTab === "followers"
                ? "border-gray-500 font-bold text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-1 after:bg-green-500 after:rounded-lg"
                : "border-gray-500 font-normal"
            }`}
          >
            Followers
          </p>
          <p
            onClick={() => setActiveTab("following")}
            className={`relative text-xl cursor-pointer px-4 py-2 text-center border-b-2 ${
              activeTab === "following"
                ? "border-gray-500 font-bold text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-1 after:bg-green-500 after:rounded-lg"
                : "border-gray-500 font-normal"
            }`}
          >
            Following
          </p>
        </div>

        <div className="p-5 ">
          {activeTab === "followers" ? (
            <div className="flex flex-col gap-5">
              {followers.map((follower, index) => (
                <div key={index}>
                  <ListFollows
                    follows={follower}
                    handleFollows={[handleFollowing, handleFollowers]}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {following.map((following, index) => (
                <div key={index}>
                  <ListFollows
                    follows={following}
                    handleFollows={[handleFollowing, handleFollowers]}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Follows;
