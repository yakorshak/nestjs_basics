import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ICar } from 'src/domain/car/interfaces/car.interfaces';
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
  car?: ICar;
}
