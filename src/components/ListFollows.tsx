import { assets } from "../assets/assets";
import type { IUser } from "../types/app";
import ButtonFollows from "./ButtonFollows";

interface IfollowsProps {
  follows: IUser;
  handleFollows?: Array<() => void | Promise<void>>;
}

const ListFollows = ({ follows, handleFollows }: IfollowsProps) => {
  return (
    <>
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 rounded-full object-cover">
            <img src={assets.Profile} alt="" />
          </div>

          <div>
            <p className="text-md font-semibold">{follows.fullname}</p>
            <span className="text-gray-400 font-normal text-md">
              @{follows.username}
            </span>
            <p>{follows?.profile?.bio}</p>
          </div>
        </div>

        <div>
          <ButtonFollows follows={follows} handleFollows={handleFollows} />
        </div>
      </div>
    </>
  );
};

export default ListFollows;
