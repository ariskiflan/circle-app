import Profile from "./Profile";
import Suggested from "./Suggested";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
const Rightbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="text-white h-screen border-l-2 border-gray-500 p-10">
        <div className="flex flex-col gap-5">
          {location.pathname != "/my-profile" && <Profile />}
          <Suggested />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rightbar;
