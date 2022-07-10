export interface IUserBody {
  username: string;
  password: string;
}

export interface IUser extends IUserBody {
  id: number;
}

export type IUserCreate = IUserBody;
