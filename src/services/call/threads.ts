import api from "..";

export const getThreads = async () => {
  return await api.get("threads");
};

export const createThreads = async (body: {
  content: string;
  image: FileList | null;
  threadId?: number;
}) => {
  const formData = new FormData();

  if (body.image !== null) {
    for (let i = 0; i < body.image.length; i++) {
      formData.append("image", body.image[i]);
    }
  }

  if (body.threadId) {
    formData.append("threadId", body.threadId.toString());
  }

  formData.append("content", body.content);

  return await api.post("thread", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
