import api from "..";

export const getThreads = async () => {
  const res = await api.get("threads");
  return res.data;
};

export const createThreads = async (data: {
  content: string;
  image: FileList | null;
  threadId?: number;
}) => {
  const formData = new FormData();

  console.log(data, "DATA");

  if (data.image !== null) {
    for (let i = 0; i < data.image.length; i++) {
      formData.append("image", data.image[i]);
    }
  }

  if (data.threadId) {
    formData.append("threadId", data.threadId.toString());
  }

  formData.append("content", data.content);

  // const res = await api.post("thread", formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // });

  const res = await api.post("thread", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const getThreadById = async (id: number) => {
  const res = await api.get(`thread/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const getReplies = async (id: number) => {
  const res = await api.get(`replies/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const deleteThread = async (id: number) => {
  const res = await api.delete(`deleteThread/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};
