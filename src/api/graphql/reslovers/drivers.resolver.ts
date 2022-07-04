import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Driver } from 'src/domain/drivers/entities/driver.entity';
import { DriversService } from '../../../domain/drivers/drivers.service';
import { DriversModel } from '../commons/drivers.model';
import { CreateDriverInput } from '../dto/create-driver.input';

@Resolver(() => DriversModel)
export class DriversResolver {
  constructor(private driverService: DriversService) {}

  @Mutation(() => DriversModel)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ): Promise<Driver> {
    return this.driverService.createDriver(createDriverInput);
  }

  @Query(() => DriversModel, { name: 'driver' })
  findDriver(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  // @Query((returns) => [Driver])
  // test(@Args('carId', { type: () => Int }) carId: number): Promise<Driver[]> {
  //   return this.driverService.findDrivers(carId);
  // }
}
