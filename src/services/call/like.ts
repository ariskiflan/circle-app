import api from "..";

export const createLike = async (threadId: number) => {
  const res = await api.post(
    "like",
    { threadId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return res.data;
};

export const getCurrentLike = async (threadId: number) => {
  const res = await api.get(`like/${threadId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};
