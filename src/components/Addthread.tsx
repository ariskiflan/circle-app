import { useRef, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { assets } from "../assets/assets";
import { createThreads } from "../services/call/threads";
import { useLocation } from "react-router-dom";

interface AddThread {
  content: string;
  image: FileList | null;
  threadId?: number;
}

interface Props {
  getThread: () => void;
  threadId?: number;
}

const AddThread = ({ getThread, threadId }: Props) => {
  const profileString = localStorage.getItem("user");

  let profile = null;

  if (profileString) {
    profile = JSON.parse(profileString);
  }

  const [postThreads, setPostThreads] = useState<AddThread>({
    content: "",
    image: null,
  });
  const [preview, setPreview] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const handlePostThreads = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (threadId) {
        postThreads.threadId = threadId;
      }

      if (postThreads.content !== "" || postThreads.image !== null) {
        await createThreads(postThreads);

        getThread();
      }

      setPostThreads({
        content: "",
        image: null,
      });
      setPreview([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = e.target;

    if (files) {
      const fileList = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreview(fileList);

      setPostThreads({
        ...postThreads,
        [name]: files,
      });

      return;
    }

    setPostThreads({
      ...postThreads,
      [name]: value,
    });
  };

  const handleImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="border-b-2 border-gray-500 p-5 w-full flex flex-col">
      <div className="flex items-center gap-5 w-full">
        <img
          src={profile?.avatar || assets.Profile}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex-1 flex items-center gap-3">
          <input
            type="text"
            placeholder={
              location.pathname == "/"
                ? "What's on your mind?"
                : "Type Your Reply"
            }
            className="flex-1 text-xl text-white bg-transparent px-4 py-2 outline-none"
            onChange={handleChange}
            name="content"
            value={postThreads.content}
          />

          <button onClick={handleImage}>
            <input
              multiple
              max={4}
              name="image"
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={handleChange}
            />

            <img src={assets.GaleryAdd} alt="" className="w-8 cursor-pointer" />
          </button>

          <button
            onClick={handlePostThreads}
            type="submit"
            className="bg-[#04A51E] text-white px-6 py-2 rounded-3xl text-sm font-medium hover:bg-transparent transition-all duration-100 ease-in-out hover:[box-shadow:inset_0_0_0_2px_white]"
          >
            Post
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {preview
          ? preview.map((item: any) => (
              <img className="w-full" src={item} alt="" />
            ))
          : ""}
      </div>
    </div>
  );
};

export default AddThread;
