import api from "..";

export const getFollower = async () => {
  const res = await api.get("follower", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const getFollowing = async () => {
  const res = await api.get("following", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const createFollow = async (followingId: number) => {
  const res = await api.post(
    "follow",
    {
      followingId,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return res.data;
};
