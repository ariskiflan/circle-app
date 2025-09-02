import SuggestedItem from "./SuggestedItem";
const Suggested = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-2xl flex flex-col gap-5">
        <p className="text-2xl font-semibold">Suggested For you</p>

        <div className="flex flex-col gap-5">
          <SuggestedItem />
          <SuggestedItem />
          <SuggestedItem />
        </div>
      </div>
    </>
  );
};

export default Suggested;
