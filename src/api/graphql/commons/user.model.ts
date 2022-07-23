import { Int, ObjectType, Field } from '@nestjs/graphql';
import { Role } from 'src/domain/auth/enums/role.enum';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  roles: Role;
}
