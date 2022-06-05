import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDriverInput {
  @Field()
  name: string;

  @Field((type) => Int)
  carId: number;
}
