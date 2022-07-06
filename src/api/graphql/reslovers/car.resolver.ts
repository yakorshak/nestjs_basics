import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { ICar } from 'src/domain/car/interfaces/car.interfaces';
import { IDriver } from 'src/domain/driver/interfaces/driver.interfaces';
import { CarService } from '../../../domain/car/car.service';
import { CarModel } from '../commons/car.model';
import { DriverModel } from '../commons/driver.model';
import { CreateCarInput } from '../dto/create-car.input';
import { UpdateCarInput } from '../dto/update-car.input';

@Resolver((of) => CarModel)
export class CarResolver {
  constructor(private carsService: CarService) {}

  @Query((returns) => [CarModel])
  getAllCars(): Promise<ICar[]> {
    return this.carsService.findAll();
  }

  // type ?
  @Query((returns) => CarModel)
  getCar(@Args('id', { type: () => Int }) id: number): Promise<ICar> {
    return this.carsService.getCar(id);
  }

  // type ?
  // @Mutation((returns) => CarModel)
  // updateCar(
  //   @Args('id', { type: () => Int }) id: number,
  //   @Args('data') data: updateCarInput,
  // ): Promise<ICarUpdate> {
  //   return this.carsService.updateCar(id, data);
  // }

  @Mutation((returns) => CarModel)
  updateCar(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateCarInput,
  ): Promise<ICar> {
    return this.carsService.updateCar(id, data);
  }

  @Mutation(() => CarModel)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarInput,
  ): Promise<ICar> {
    return this.carsService.createCar(createCarInput);
  }

  // type ?
  @Mutation((returns) => CarModel)
  deleteCar(@Args('id', { type: () => Int }) id: number): Promise<ICar> {
    return this.carsService.deleteCar(id);
  }

  @ResolveField((returns) => [DriverModel])
  drivers(@Parent() car: ICar): Promise<IDriver[]> {
    return this.carsService.getDrivers(car);
  }
}
