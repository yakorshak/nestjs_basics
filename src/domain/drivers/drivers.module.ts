import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/domain/drivers/entities/driver.entity';
import { DriversResolver } from 'src/api/graphql/reslovers/drivers.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
