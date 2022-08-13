import { IRole } from './role.interface';

export interface IUserBody {
  username: string;
  password: string;
}

export interface IUser extends IUserBody {
  id: number;
  roles: IRole[];
}

export interface IUserLogged {
  id: number;
  username: string;
}

export type IUserCreate = IUserBody;
