import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Roles } from 'src/domain/auth/decorators/role.decorator';
import { Role } from 'src/domain/auth/enums/role.enum';
import { IsAuthGuard } from 'src/domain/auth/guards/is-auth.guard';
import { RolesGuard } from 'src/domain/auth/guards/roles.guard';
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
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.User)
  getAllCars(): Promise<ICar[]> {
    return this.carsService.findAll();
  }

  @Query(() => CarModel)
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.User)
  getCar(@Args('id', { type: () => Int }) id: number): Promise<ICar> {
    return this.carsService.getCar(id);
  }

  @Mutation(() => CarModel)
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.User)
  updateCar(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateCarDTO,
  ): Promise<ICar> {
    return this.carsService.updateCar(id, data);
  }

  @Mutation(() => CarModel)
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.User)
  createCar(
    @Args('createCarInput') createCarInput: CreateCarDTO,
  ): Promise<ICar> {
    return this.carsService.createCar(createCarInput);
  }

  @Mutation(() => CarModel)
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.User)
  deleteCar(@Args('id', { type: () => Int }) id: number): Promise<ICar> {
    return this.carsService.deleteCar(id);
  }

  @ResolveField(() => [DriverModel])
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.User)
  drivers(@Parent() car: ICar): Promise<IDriver[]> {
    return this.carsService.getDrivers(car);
  }
}
