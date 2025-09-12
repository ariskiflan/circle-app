export interface IRegister {
  email: string;
  fullname: string;
  username: string;
  password: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IThread {
  id?: number;
  content?: string;
  image?: IThreadImage[];
  userId: number;
  threadId?: number;
  author?: IUser;
  posted_at: string;
  _count: {
    replies: number;
    like: number;
  };
}

interface IThreadImage {
  id: number;
  image?: string;
}

export interface IUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  profile?: IProfile;
  following?: IFollowers[];
  follower?: IFollowers[];
}

export interface IFollowers {
  followerId: number;
  followingId: number;
}

export interface IProfile {
  bio?: string;
  avatar?: string;
  cover?: string;
  user: IUser;
  userId?: number;
}

export interface IUserSearch {
  id: number;
  username: string;
  fullname: string;
  email: string;
  profile?: IProfileSearch;
  following?: IFollowing[];
  follower?: IFollower[];
}
