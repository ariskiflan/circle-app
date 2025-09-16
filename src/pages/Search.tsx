import { useEffect, useState } from "react";
import type { IUserSearch } from "../types/app";
import { getUsers } from "../services/call/user";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import ButtonFollows from "../components/ButtonFollows";

const Search = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState<IUserSearch[]>([]);
  const [SearchResult, setSearchResult] = useState<IUserSearch[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSearchUsers = async () => {
    try {
      const res = await getUsers();

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue === "") {
      setSearchResult([]);
    } else {
      const result = users.filter((user) => {
        return user.username.toLowerCase().includes(inputValue.toLowerCase());
      });
      setSearchResult(result);
    }
  };

  const handleRedirectProfile = (users: IUserSearch) => {
    if (user?.id !== users?.id) {
      return `/profile/${users?.id}`;
    }
    return "/my-profile";
  };

  useEffect(() => {
    handleSearchUsers();
  }, []);

  return (
    <>
      <div className="px-5 py-10 flex flex-col gap-5">
        <div>
          <input
            type="text"
            className="w-full bg-[#3f3f3f] p-2 rounded-2xl font-normal text-white placeholder:text-white"
            placeholder="Seacrh Your Friend"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-5">
          {SearchResult.length > 0 ? (
            SearchResult.map((user) => (
              <div className="flex items-center gap-5 justify-between">
                <div className="flex items-center gap-5">
                  <Link to={handleRedirectProfile(user)}>
                    <div className="w-10 h-10 rounded-full object-cover">
                      <img
                        src={user.profile?.Avatar || assets.Profile}
                        alt=""
                      />
                    </div>
                  </Link>

                  <div>
                    <p className="text-md font-semibold">{user.fullname}</p>
                    <span className="text-gray-400 font-normal text-md">
                      @{user.username}
                    </span>
                    <p>{user.profile.bio}</p>
                  </div>
                </div>

                <div>
                  <ButtonFollows follows={user} />
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center gap-5 justify-center h-screen">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-2xl font-semibold">
                  No Result for "{input}"
                </p>
                <p className="text-md font-normal text-[#b3b3b3]">
                  Try searching for something else or check the spelling of what
                  you typed
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
