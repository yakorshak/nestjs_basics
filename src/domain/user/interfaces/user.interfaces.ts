export interface IUserBody {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
}

export type IUserCreate = IUserBody;
