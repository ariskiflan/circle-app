import api from "..";

export const getProfile = async (token: string) => {
  const res = await api.get("profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};
