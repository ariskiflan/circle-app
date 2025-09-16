import { useEffect, useState } from "react";
import ListFollows from "../components/ListFollows";
import type { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { getFollowerAsync, getFollowingAsync } from "../store/async/follows";

const Follows = () => {
  const [activeTab, setActiveTab] = useState("followers");

  const dispatch = useDispatch<AppDispatch>();
  const followersList = useSelector(
    (state: RootState) => state.follows.followers
  );
  const followingList = useSelector(
    (state: RootState) => state.follows.followings
  );

  useEffect(() => {
    dispatch(getFollowerAsync());
    dispatch(getFollowingAsync());
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
              {followersList.map((follower, index) => (
                <div key={index}>
                  <ListFollows follows={follower} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {followingList.map((following, index) => (
                <div key={index}>
                  <ListFollows follows={following} />
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
