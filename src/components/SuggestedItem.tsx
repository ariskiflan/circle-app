import { assets } from "../assets/assets";
import type { IUser } from "../types/app";
import ButtonFollows from "./ButtonFollows";

interface IUserProps {
  suggestedUsers: IUser;
}

const SuggestedItem = ({ suggestedUsers }: IUserProps) => {
  const { fullname, username, profile } = suggestedUsers;

  return (
    <>
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-5">
          <img src={profile?.avatar || assets.Avatar} alt="" className="w-10" />

          <div>
            <p className="text-md font-semibold">{fullname}</p>
            <span className="text-gray-400 font-normal text-md">
              @{username}
            </span>
          </div>
        </div>

        <div>
          <ButtonFollows follows={suggestedUsers} />
        </div>
      </div>
    </>
  );
};

export default SuggestedItem;
