import { createFollow } from "../services/call/follow";
import type { IUser } from "../types/app";
import type { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileAsync } from "../store/async/profile";

interface IFollowsProps {
  follows: IUser;
  handleFollows?: Array<() => void | Promise<void>>;
}

const ButtonFollows = ({ follows, handleFollows = [] }: IFollowsProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateFollows = async () => {
    try {
      const token = localStorage.getItem("token");
      await createFollow(Number(follows.id));
      setIsFollowing((prev) => !prev);

      dispatch(getProfileAsync(token!));

      handleFollows.forEach((fn) => fn());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkIsFollowing = () => {
      try {
        const followings = user?.user?.follower?.find((following: any) => {
          return following.followingId === follows.id;
        });

        setIsFollowing(followings ? true : false);
      } catch (error) {
        console.log(error);
      }
    };

    checkIsFollowing();
  }, [user, follows.id]);

  return (
    <>
      <div onClick={handleCreateFollows}>
        <button className="flex border-2 border-white py-2 px-4 rounded-2xl text-white font-semibold">
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </>
  );
};

export default ButtonFollows;
