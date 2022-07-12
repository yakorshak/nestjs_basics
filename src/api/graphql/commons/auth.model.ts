import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthModel {
  @Field()
  username: string;

  @Field()
  password: string;
}
