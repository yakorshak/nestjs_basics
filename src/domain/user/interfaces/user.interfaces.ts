import { Role } from 'src/domain/auth/enums/role.enum';

export interface IUserBody {
  username: string;
  password: string;
}

export interface IUser extends IUserBody {
  id: number;
  roles: Role;
}

export interface IUserLogged {
  id: number;
  username: string;
}

export type IUserCreate = IUserBody;
