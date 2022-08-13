import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class UpdateCarDTO {
  @IsAlpha()
  @Field()
  readonly brand?: string;

  @Field()
  readonly color?: string;
}
