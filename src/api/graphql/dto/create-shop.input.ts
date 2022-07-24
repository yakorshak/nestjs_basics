import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateShopDTO {
  @Field()
  name: string;

  @Field()
  color: string;
}
