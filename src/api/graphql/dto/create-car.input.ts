import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateCarDTO {
  @IsAlpha()
  @Field()
  readonly brand: string;

  @Field({ nullable: true })
  readonly color?: string;
}
