import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Car } from 'src/domain/car/entities/car.entity';
import { Driver } from 'src/domain/driver/entities/driver.entity';
import { CarService } from '../../../domain/car/car.service';
import { CarModel } from '../commons/car.model';
import { DriverModel } from '../commons/driver.model';
import { CreateCarInput } from '../dto/create-car.input';
import { updateCarInput } from '../dto/update-car.input';

@Resolver((of) => CarModel)
export class CarResolver {
  constructor(private carsService: CarService) {}

  @Query((returns) => [CarModel])
  getAllCars(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  // type ?
  @Query((returns) => CarModel)
  getCar(@Args('id', { type: () => Int }) id: number): Promise<Car> {
    return this.carsService.getCar(id);
  }

  // type ?
  @Mutation((returns) => CarModel)
  updateCar(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: updateCarInput,
  ): Promise<Car> {
    return this.carsService.updateCar(id, data);
  }

  @Mutation(() => CarModel)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarInput,
  ): Promise<Car> {
    return this.carsService.createCar(createCarInput);
  }

  // type ?
  @Mutation((returns) => CarModel)
  deleteCar(@Args('id', { type: () => Int }) id: number): Promise<Car> {
    return this.carsService.deleteCar(id);
  }

  @ResolveField((returns) => [DriverModel])
  drivers(@Parent() car: Car): Promise<Driver[]> {
    return this.carsService.getDrivers(car);
  }
}
