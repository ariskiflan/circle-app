import { useState } from "react";
import { assets } from "../assets/assets";
import type { IRegister } from "../types/app";
import { register } from "../services/call/user";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const initialState = {
    username: "",
    fullname: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formInput, setFormInput] = useState<IRegister>(initialState);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register(formInput);

      if (res.status) {
        setFormInput(res);
        toast.success(`Register Success!`);
        navigate("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Login failed");
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unexpected error occurred");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <>
      <div>
        <div className="flex flex-col h-screen justify-center w-1/3 m-auto gap-5">
          <div className="flex flex-col gap-5">
            <img src={assets.Logo} alt="" className="w-64" />
            <p className="text-4xl font-semibold">Create Account Circle</p>
          </div>

          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-5 w-full"
          >
            <input
              className="border-2 px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={formInput.username}
              name="username"
            />
            <input
              className="border-2 px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="Fullname"
              onChange={handleChange}
              value={formInput.fullname}
              name="fullname"
            />
            <input
              className="border-2 px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              value={formInput.email}
              name="email"
            />
            <input
              className="border-2 px-4 py-2 rounded-xl w-full"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={formInput.password}
              name="password"
            />

            <button className="bg-[#04A51E] text-white w-full py-2 rounded-3xl text-xl font-medium hover:bg-transparent  transition-all duration-100 ease-in-out hover:[box-shadow:inset_0_0_0_2px_white] cursor-pointer">
              Create
            </button>
          </form>

          <div>
            <p>
              Already have an acount?{" "}
              <Link to="/login" className="text-[#04A51E] cursor-pointer">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
