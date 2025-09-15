import api from "..";
import type { ILogin, IRegister } from "../../types/app";

export const register = async (data: IRegister) => {
  const res = await api.post("register", data);
  return res.data;
};

export const login = async (data: ILogin) => {
  const res = await api.post("login", data);
  return res.data;
};

export const getUsers = async () => {
  const res = await api.get("user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const getUser = async (id: number) => {
  const res = await api.get(`user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const getUsersNotId = async () => {
  const res = await api.get("suggested", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};
