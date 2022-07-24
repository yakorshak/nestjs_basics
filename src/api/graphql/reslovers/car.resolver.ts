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
import { CreateCarDTO } from '../dto/create-car.input';
import { UpdateCarDTO } from '../dto/update-car.input';

@Resolver(() => CarModel)
export class CarResolver {
  constructor(private carsService: CarService) {}

  @Query(() => [CarModel])
  getAllCars(): Promise<ICar[]> {
    return this.carsService.findAll();
  }

  @Query(() => CarModel)
  getCar(@Args('id', { type: () => Int }) id: number): Promise<ICar> {
    return this.carsService.getCar(id);
  }

  @Mutation(() => CarModel)
  updateCar(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateCarDTO,
  ): Promise<ICar> {
    return this.carsService.updateCar(id, data);
  }

  @Mutation(() => CarModel)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarDTO,
  ): Promise<ICar> {
    return this.carsService.createCar(createCarInput);
  }

  @Mutation(() => CarModel)
  deleteCar(@Args('id', { type: () => Int }) id: number): Promise<ICar> {
    return this.carsService.deleteCar(id);
  }

  @ResolveField(() => [DriverModel])
  drivers(@Parent() car: ICar): Promise<IDriver[]> {
    return this.carsService.getDrivers(car);
  }
}
