import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class UpdateCarInput {
  @IsAlpha()
  @Field()
  brand?: string;

  @Field()
  color?: string;
}
