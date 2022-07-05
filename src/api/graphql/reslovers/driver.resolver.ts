import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Driver } from 'src/domain/driver/entities/driver.entity';
import { DriverService } from '../../../domain/driver/driver.service';
import { DriverModel } from '../commons/driver.model';
import { CreateDriverInput } from '../dto/create-driver.input';

@Resolver(() => DriverModel)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Mutation(() => DriverModel)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ): Promise<Driver> {
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
