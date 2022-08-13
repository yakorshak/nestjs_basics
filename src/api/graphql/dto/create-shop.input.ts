import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateShopDTO {
  @Field()
  readonly name: string;

  @Field()
  readonly color: string;
}
