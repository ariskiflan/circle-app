import { useSelector } from "react-redux";
import { assets } from "../assets/assets";
import type { IUser } from "../types/app";
import ButtonFollows from "./ButtonFollows";
import type { RootState } from "../store";
import { Link } from "react-router-dom";

interface IFollowsProps {
  follows: IUser;
}

const ListFollows = ({ follows }: IFollowsProps) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const handleRedirectProfile = () => {
    if (user?.id !== follows?.id) {
      return `/profile/${follows?.id}`;
    }
    return "/my-profile";
  };

  return (
    <>
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-5">
          <Link to={handleRedirectProfile()}>
            <div className="w-10 h-10 rounded-full object-cover">
              <img src={assets.Profile} alt="" />
            </div>
          </Link>

          <div>
            <p className="text-md font-semibold">{follows.fullname}</p>
            <span className="text-gray-400 font-normal text-md">
              @{follows.username}
            </span>
            <p>{follows?.profile?.bio}</p>
          </div>
        </div>

        <div>
          <ButtonFollows follows={follows} />
        </div>
      </div>
    </>
  );
};

export default ListFollows;
