import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Car } from 'src/domain/car/entities/car.entity';
import { CarModel } from './car.model';

@ObjectType()
export class DriverModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  carId: number;

  @Field(() => CarModel, { nullable: true })
  car?: Car;
}
