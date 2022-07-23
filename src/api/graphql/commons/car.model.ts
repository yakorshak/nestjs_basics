import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IDriver } from 'src/domain/driver/interfaces/driver.interfaces';
import { DriverModel } from './driver.model';

@ObjectType()
export class CarModel {
  @Field(() => Int)
  id: number;

  @Field()
  brand: string;

  @Field()
  color: string;

  @Field(() => [DriverModel], { nullable: true })
  drivers: IDriver[];
}
