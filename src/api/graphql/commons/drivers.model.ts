import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Car } from 'src/entities/car.entity';

@ObjectType()
export class DriversModel {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int)
  carId: number;

  @Field((type) => Car, { nullable: true })
  car?: Car;
}
