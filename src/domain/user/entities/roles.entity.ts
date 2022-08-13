import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../interfaces/user.interfaces';
import { UserEntity } from './user.entity';

@Entity()
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  user: IUser[];
}
