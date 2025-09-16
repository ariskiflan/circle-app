import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import type { ILogin } from "../types/app";
import { login } from "../services/call/user";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import { getProfileAsync } from "../store/async/auth";
import type { AppDispatch } from "../store";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [formInput, setFormInput] = useState<ILogin>(initialState);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(formInput);
      if (res.status) {
        const token = res.data.token;

        const profileRes = await dispatch(getProfileAsync(token!)).unwrap();

        dispatch(setUser({ user: profileRes, token }));

        toast.success(`Login Success!`);
        navigate("/");
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
            <p className="text-4xl font-semibold">Login to Circle</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
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
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={formInput.password}
              name="password"
            />

            <button
              type="submit"
              className="bg-[#04A51E] text-white w-full py-2 rounded-3xl text-xl font-medium hover:bg-transparent  transition-all duration-100 ease-in-out hover:[box-shadow:inset_0_0_0_2px_white] cursor-pointer"
            >
              Login
            </button>
          </form>

          <div>
            <p>
              Dont have an acount yet?{" "}
              <Link to="/register" className="text-[#04A51E] cursor-pointer">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
