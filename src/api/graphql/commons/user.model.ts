import { Int, ObjectType, Field } from '@nestjs/graphql';
import { IRole } from 'src/domain/user/interfaces/role.interface';
import { RolesModel } from './roles.model';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => [RolesModel], { nullable: true })
  roles: IRole[];
}
