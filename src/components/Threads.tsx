import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import type { IThread } from "../types/app";
import timeAgo from "../utils/formatTime";
import Like from "./Like";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteThread } from "../services/call/threads";
import { toast } from "react-toastify";

interface IThreadProps {
  thread: IThread;
  handleGetThreads: () => void;
}

const Threads = ({ thread, handleGetThreads }: IThreadProps) => {
  const { content, author, image, posted_at, _count, id, userId } = thread;

  const profileString = localStorage.getItem("user");

  let profile = null;

  if (profileString) {
    profile = JSON.parse(profileString);
  }

  const handleDeleteThread = async () => {
    try {
      await deleteThread(Number(id));
      handleGetThreads();
      toast.success(`Delete Thread Success!`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-b-2 border-gray-500">
      <div className="p-5">
        <div className="flex gap-5 relative">
          <img
            src={author?.profile?.avatar || assets.Profile}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-xl">{author?.fullname}</p>
              <p className="text-gray-400 text-md font-semibold">
                @{author?.username}
              </p>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <p className="text-gray-400 text-md font-semibold">
                {timeAgo(posted_at)}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-md font-normal line-clamp-5">{content}</p>

              <div className="grid grid-cols-2 gap-2">
                {image &&
                  image.map((item, index: number) => (
                    <div key={index}>
                      <img src={item.image} alt="" />
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <Like
                  threadId={Number(id)}
                  handleGetThreads={handleGetThreads}
                />
                <span className="text-md text-gray-400 font-medium">
                  {_count.like}
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Link
                  to={`/detail-thread/${id}`}
                  className="flex gap-2 items-center"
                >
                  <img src={assets.Reply} className="w-6" alt="" />
                  <span className="text-md text-gray-400 font-medium">
                    {_count.replies} Replies
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {userId == profile.userId ? (
            <div
              className="absolute top-0 right-0"
              onClick={handleDeleteThread}
            >
              <RiDeleteBin6Line size={24} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Threads;
