import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class UpdateCarDTO {
  @IsAlpha()
  @Field()
  brand?: string;

  @Field()
  color?: string;
}
