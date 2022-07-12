import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponseDTO {
  //sessionId

  @Field(() => Int)
  id: number;

  @Field()
  username: string;
}
