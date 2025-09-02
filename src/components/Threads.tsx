import { assets } from "../assets/assets";

const Threads = () => {
  return (
    <div className="border-b-2 border-gray-500">
      <div className="p-5">
        <div className="flex gap-5">
          <img src={assets.Avatar} alt="avatar" className="w-10 h-10" />

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p className="font-bold text-xl">Aris Kiflan</p>
              <p className="text-gray-400 text-md font-semibold">@ariskiflan</p>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <p className="text-gray-400 text-md font-semibold">4h</p>
            </div>

            <div>
              <p className="text-md font-normal line-clamp-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit cumque enim commodi architecto tempore hic, obcaecati
                dignissimos in pariatur voluptatum quidem nihil voluptates
                incidunt sunt suscipit? Incidunt deleniti deserunt vel nemo
                porro ipsum fugit dolore hic non! Dolorum fugiat esse,
                asperiores magnam similique, doloremque qui aliquam earum
                aspernatur totam maiores quam voluptates sint sunt laudantium
                amet dignissimos.
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <img className="w-6" src={assets.Like} alt="" />
                <span className="text-md text-gray-400 font-medium">20</span>
              </div>

              <div className="flex gap-2 items-center">
                <img src={assets.Reply} className="w-6" alt="" />
                <span className="text-md text-gray-400 font-medium">
                  381 Replies
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
