import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponseDTO {
  @Field()
  readonly sessionID?: string;

  @Field(() => Int)
  readonly id: number;

  @Field()
  readonly username: string;
}
