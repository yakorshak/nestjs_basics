import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserDTO {
  @Field()
  readonly username: string;

  @Field()
  readonly password: string;
}
