import Profile from "./Profile";
import Suggested from "./Suggested";
import Footer from "./Footer";
const Rightbar = () => {
  return (
    <>
      <div className="text-white h-screen border-l-2 border-gray-500 p-10">
        <div className="flex flex-col gap-5">
          <Profile />
          <Suggested />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rightbar;
