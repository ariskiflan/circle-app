import { assets } from "../assets/assets";
const AddThread = () => {
  return (
    <div className="border-b-2 border-gray-500 p-5">
      <div className="flex items-center gap-5 w-full justify-between ">
        <img src={assets.Avatar} alt="avatar" className="w-10" />

        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-[70%] border-2 border-gray-500 text-white bg-transparent px-4 py-2 rounded-3xl"
        />

        <div className="flex flex-1 items-center gap-5">
          <img src={assets.GaleryAdd} alt="" className="w-8" />
          <button className="bg-[#04A51E] text-white w-full py-2 rounded-3xl text-xl font-medium hover:bg-transparent  transition-all duration-100 ease-in-out hover:[box-shadow:inset_0_0_0_2px_white]">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddThread;
