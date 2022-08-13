import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
  @Field()
  readonly username: string;

  @Field()
  readonly password: string;
}
