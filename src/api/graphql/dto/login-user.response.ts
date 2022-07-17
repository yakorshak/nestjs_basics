import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponseDTO {
  @Field()
  sessionID: string;

  @Field(() => Int)
  id: number;

  @Field()
  username: string;
}
