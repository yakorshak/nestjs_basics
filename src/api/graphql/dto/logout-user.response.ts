import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LogOutUserDTO {
  @Field()
  readonly Message: string;
}
