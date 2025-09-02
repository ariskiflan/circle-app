import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-2xl flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <p className="text-sm font-semibold">
            Developed by <span className="font-bold">@arskflnm</span>
          </p>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="flex gap-3 items-center">
            <FaGithub size={24} />
            <FaLinkedin size={24} />
            <FaInstagram size={24} />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <p className="flex items-center gap-2 text-sm">
            Powered by <img src={assets.FooterLogo} alt="" className="w-7" />{" "}
            Dumbways Indonesia
          </p>

          <div className="w-2 h-2 rounded-full bg-gray-400"></div>

          <span>2025</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
