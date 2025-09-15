import { useEffect, useState } from "react";
import type { IUser } from "../types/app";
import SuggestedItem from "./SuggestedItem";
import { getUsersNotId } from "../services/call/user";
const Suggested = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<IUser[]>([]);

  const handleSuggestedUser = async () => {
    try {
      const res = await getUsersNotId();

      setSuggestedUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSuggestedUser();
  }, []);

  return (
    <>
      <div className="bg-[#262626] p-5 rounded-2xl flex flex-col gap-5">
        <p className="text-2xl font-semibold">Suggested For you</p>

        <div className="flex flex-col gap-5 h-[190px] overflow-auto hide-scrollbar">
          {suggestedUsers.map((user: IUser) => (
            <div key={user.id}>
              <SuggestedItem suggestedUsers={user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Suggested;
