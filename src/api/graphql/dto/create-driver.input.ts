import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateDriverDTO {
  @IsAlpha()
  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly carId: number;
}
