import { assets } from "../assets/assets";
import type { IThread } from "../types/app";
import timeAgo from "../utils/formatTime";

interface IThreadProps {
  thread: IThread;
}

const Threads = ({ thread }: IThreadProps) => {
  const { content, author, image, posted_at, _count } = thread;

  return (
    <div className="border-b-2 border-gray-500">
      <div className="p-5">
        <div className="flex gap-5">
          <img
            src={author?.profile?.avatar || assets.Profile}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p className="font-bold text-xl">{author?.fullname}</p>
              <p className="text-gray-400 text-md font-semibold">
                @{author?.username}
              </p>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <p className="text-gray-400 text-md font-semibold">
                {timeAgo(posted_at)}
              </p>
            </div>

            <div>
              <p className="text-md font-normal line-clamp-5">{content}</p>

              <div className="grid grid-cols-2 gap-2">
                {image && image.map((item) => <img src={item.image} alt="" />)}
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <img className="w-6" src={assets.Like} alt="" />
                <span className="text-md text-gray-400 font-medium">
                  {_count.like}
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <img src={assets.Reply} className="w-6" alt="" />
                <span className="text-md text-gray-400 font-medium">
                  {_count.replies} Replies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Threads;
