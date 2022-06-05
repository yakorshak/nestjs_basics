import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversResolver } from './drivers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
