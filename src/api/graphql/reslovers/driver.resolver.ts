import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { IsAuthGuard } from 'src/domain/auth/guards/isAuth.guard';
import { IDriver } from 'src/domain/driver/interfaces/driver.interfaces';
import { Roles } from 'src/domain/auth/decorators/role.decorator';
import { Role } from 'src/domain/auth/enums/role.enum';
import { DriverService } from '../../../domain/driver/driver.service';
import { DriverModel } from '../commons/driver.model';
import { CreateDriverInput } from '../dto/create-driver.input';
import { RolesGuard } from 'src/domain/auth/guards/roles.guard';

@Resolver(() => DriverModel)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Mutation(() => DriverModel)
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ): Promise<IDriver> {
    return this.driverService.createDriver(createDriverInput);
  }

  @Query(() => DriverModel, { name: 'driver' })
  findDriver(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  // @Query((returns) => [Driver])
  // test(@Args('carId', { type: () => Int }) carId: number): Promise<Driver[]> {
  //   return this.driverService.findDrivers(carId);
  // }
}
