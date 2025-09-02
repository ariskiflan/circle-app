import { assets } from "../assets/assets";

const Profile = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-2xl flex flex-col gap-5">
        <p className="text-2xl font-semibold">My Profile</p>

        <div className="relative">
          <div className=" w-full h-[100px] rounded-2xl bg-green-500"></div>
          <div className="w-20 h-20 rounded-full bg-gray-400 border-4 border-black absolute bottom-[-40px] left-[30px]">
            <img src={assets.Avatar} alt="" />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex border-2 border-white py-2 px-4 rounded-2xl text-white font-semibold">
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">Aris kiflan</p>
          <span className="text-gray-400 font-semibold text-md">
            @ariskiflan
          </span>
          <p className="text-md font-normal">males mau beli trek</p>

          <div className="flex items-center gap-5">
            <p className="text-md font-semibold">
              291 <span className="text-gray-400 font-normal">Following</span>
            </p>
            <p className="text-md font-semibold">
              291 <span className="text-gray-400 font-normal">Followers</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
