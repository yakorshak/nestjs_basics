import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RolesModel {
  @Field(() => Int)
  id?: number;

  @Field()
  name: string;
}
