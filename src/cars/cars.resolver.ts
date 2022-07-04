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
import { Driver } from 'src/domain/drivers/entities/driver.entity';
import { CarsService } from './cars.service';
import { CreateCarInput } from './dto/create-car.input';
import { updateCarInput } from './dto/update-car.input';

@Resolver((of) => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  getAllCars(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  // type ?
  @Query((returns) => Car)
  getCar(@Args('id', { type: () => Int }) id: number): Promise<Car> {
    return this.carsService.getCar(id);
  }

  // type ?
  @Mutation((returns) => Car)
  updateCar(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: updateCarInput,
  ): Promise<Car> {
    return this.carsService.updateCar(id, data);
  }

  @Mutation(() => Car)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarInput,
  ): Promise<Car> {
    return this.carsService.createCar(createCarInput);
  }

  // type ?
  @Mutation((returns) => Car)
  deleteCar(@Args('id', { type: () => Int }) id: number): Promise<Car> {
    return this.carsService.deleteCar(id);
  }

  @ResolveField((returns) => [Driver])
  drivers(@Parent() car: Car): Promise<Driver[]> {
    return this.carsService.getDrivers(car);
  }
}
