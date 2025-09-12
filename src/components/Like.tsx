import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { createLike, getCurrentLike } from "../services/call/like";

interface ILikeProps {
  threadId: number;
  handleGetThreads: () => void;
}

const Like = ({ threadId, handleGetThreads }: ILikeProps) => {
  const [like, setLike] = useState(false);

  const getLikes = async () => {
    try {
      const res = await getCurrentLike(threadId);

      setLike(res.data.like === null ? false : true);

      handleGetThreads();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      await createLike(threadId);

      await getLikes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <>
      <div onClick={handleLike}>
        {like ? (
          <FaHeart size={"20px"} color={"red"} />
        ) : (
          <FaRegHeart size={"20px"} color={"#909090"} />
        )}
      </div>
    </>
  );
};

export default Like;
