import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateDriverInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field((type) => Int)
  carId: number;
}
