import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShopModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;
}
