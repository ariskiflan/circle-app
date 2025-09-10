import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Like from "../components/Like";
import type { IThread } from "../types/app";
import { Link, useParams } from "react-router-dom";
import { getReplies, getThreadById } from "../services/call/threads";
import timeAgo from "../utils/formatTime";
import AddThread from "../components/Addthread";
import Threads from "../components/Threads";

const ThreadDetail = () => {
  const { id } = useParams();
  const [threadDetail, setThreadDetail] = useState<IThread | null>(null);
  const [replies, setReplies] = useState<IThread[]>([]);

  const handleGetThreadDetail = async () => {
    try {
      const res = await getThreadById(Number(id));
      const resReplies = await getReplies(Number(id));

      setReplies(resReplies.data);

      setThreadDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetThreadDetail();
  }, []);

  return (
    <>
      <div className="">
        <div className="p-5">
          <div className="flex gap-3 items-center">
            <Link to={"/"}>
              <img className="w-10" src={assets.Back} alt="" />
            </Link>
            <p className="text-3xl font-semibold">Status</p>
          </div>
        </div>

        <div className="border-b-2 border-gray-500">
          <div className="p-5">
            <div className="flex gap-5">
              <img
                src={assets.Profile}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <p className="font-bold text-xl">
                    {threadDetail?.author?.fullname}
                  </p>
                  <p className="text-gray-400 text-md font-semibold">
                    {threadDetail?.author?.username}
                  </p>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <p className="text-gray-400 text-md font-semibold">
                    {threadDetail?.posted_at && timeAgo(threadDetail.posted_at)}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-md font-normal line-clamp-5">
                    {threadDetail?.content}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {threadDetail?.image &&
                      threadDetail?.image.map((item, index: number) => (
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
                      handleGetThreads={handleGetThreadDetail}
                    />
                    <span className="text-md text-gray-400 font-medium">
                      {threadDetail?._count?.like}
                    </span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <img src={assets.Reply} className="w-6" alt="" />
                      <span className="text-md text-gray-400 font-medium">
                        {threadDetail?._count?.replies} Replies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddThread getThread={handleGetThreadDetail} threadId={Number(id)} />

        <div className="">
          {replies.map((item) => (
            <div key={item.id}>
              <Threads thread={item} handleGetThreads={handleGetThreadDetail} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreadDetail;
