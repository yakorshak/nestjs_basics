import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class updateCarInput {
  @IsAlpha()
  @Field()
  brand?: string;

  @Field()
  color?: string;
}
