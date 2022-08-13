import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IRole } from '../interfaces/role.interface';
import { IUser } from '../interfaces/user.interfaces';
import { RolesEntity } from './roles.entity';

@Entity()
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @JoinTable()
  @ManyToMany(() => RolesEntity, (roles) => roles.user, {
    cascade: true,
  })
  roles: IRole[];
}
