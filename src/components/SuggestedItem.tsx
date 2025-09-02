import { assets } from "../assets/assets";

const SuggestedItem = () => {
  return (
    <>
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-5">
          <img src={assets.Avatar} alt="" className="w-10" />

          <div>
            <p className="text-md font-semibold">mohammed jawir</p>
            <span className="text-gray-400 font-normal text-md">
              @mohammedjawir
            </span>
          </div>
        </div>

        <div>
          <button className="flex border-2 border-white py-2 px-4 rounded-2xl text-white font-semibold">
            Follow
          </button>
        </div>
      </div>
    </>
  );
};

export default SuggestedItem;
