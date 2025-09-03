import { useDispatch } from "react-redux";
import { assets } from "../assets/assets";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className=" h-screen border-r-2 border-gray-500">
        <div className="p-10 flex flex-col gap-10 h-full justify-between">
          <div className="flex flex-col gap-10">
            <img className="w-58" src={assets.Logo} alt="" />

            <div>
              <ul className="flex flex-col gap-10">
                <li className="flex items-center gap-5 hover:translate-1 transition-all duration-100">
                  <img className="w-10" src={assets.Home} alt="" />
                  <p className="text-2xl text-white font-medium hover:font-bold cursor-pointer ">
                    Home
                  </p>
                </li>
                <li className="flex items-center gap-5 hover:translate-1 transition-all duration-100">
                  <img className="w-10" src={assets.UserSearch} alt="" />
                  <p className="text-2xl text-white font-medium hover:font-bold cursor-pointer">
                    Search
                  </p>
                </li>
                <li className="flex items-center gap-5 hover:translate-1 transition-all duration-100">
                  <img className="w-10" src={assets.Like} alt="" />
                  <p className="text-2xl text-white font-medium hover:font-bold cursor-pointer">
                    Follows
                  </p>
                </li>
                <li className="flex items-center gap-5 hover:translate-1 transition-all duration-100">
                  <img className="w-10" src={assets.Profile} alt="" />
                  <p className="text-2xl text-white font-medium hover:font-bold cursor-pointer">
                    Profile
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <button className="bg-[#04A51E] text-white w-full py-3 rounded-3xl text-2xl font-medium hover:bg-transparent  transition-all duration-100 ease-in-out hover:[box-shadow:inset_0_0_0_2px_white]">
                Create Post
              </button>
            </div>
          </div>

          <div
            className="flex items-center gap-5 hover:translate-1 transition-all duration-100"
            onClick={handleLogout}
          >
            <img className="w-10" src={assets.Logout} alt="" />
            <p className="text-2xl text-white font-medium hover:font-bold cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
