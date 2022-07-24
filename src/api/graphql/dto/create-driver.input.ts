import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateDriverDTO {
  @IsAlpha()
  @Field()
  name: string;

  @Field(() => Int)
  carId: number;
}
