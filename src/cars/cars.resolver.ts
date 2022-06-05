import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Car } from 'src/entities/car.entity';
import { Driver } from 'src/entities/driver.entity';
import { CarsService } from './cars.service';
import { CreateCarInput } from './dto/create-car.input';

@Resolver((of) => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  getAllCars(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Query((returns) => Car)
  getCar(@Args('id', { type: () => Int }) id: number): Promise<Car> {
    return this.carsService.getCar(id);
  }

  @Mutation((returns) => Car)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarInput,
  ): Promise<Car> {
    return this.carsService.createCar(createCarInput);
  }

  @ResolveField((returns) => [Driver])
  drivers(@Parent() car: Car): Promise<Driver[]> {
    return this.carsService.getDrivers(car);
  }
}
