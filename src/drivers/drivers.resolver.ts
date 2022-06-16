import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Driver } from 'src/entities/driver.entity';
import { DriversService } from './drivers.service';
import { CreateDriverInput } from './dto/create-driver.input';

@Resolver(() => Driver)
export class DriversResolver {
  constructor(private driverService: DriversService) {}

  @Mutation(() => Driver)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ): Promise<Driver> {
    return this.driverService.createDriver(createDriverInput);
  }

  @Query(() => Driver, { name: 'driver' })
  findDriver(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  // @Query((returns) => [Driver])
  // test(@Args('carId', { type: () => Int }) carId: number): Promise<Driver[]> {
  //   return this.driverService.findDrivers(carId);
  // }
}
