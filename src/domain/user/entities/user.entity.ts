import { Role } from 'src/domain/auth/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../interfaces/user.interfaces';

@Entity()
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Admin,
  })
  roles: Role;
}
