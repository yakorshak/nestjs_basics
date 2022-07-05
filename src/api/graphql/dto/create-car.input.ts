import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateCarInput {
  @IsAlpha()
  @Field()
  brand: string;

  @Field({ nullable: true })
  color?: string;
}
