import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Driver } from 'src/domain/driver/entities/driver.entity';
import { DriverModel } from './driver.model';

@ObjectType()
export class CarModel {
  @Field(() => Int)
  id: number;

  @Field()
  brand: string;

  @Field()
  color: string;

  @Field((type) => [DriverModel], { nullable: true })
  drivers: Driver[];
}
