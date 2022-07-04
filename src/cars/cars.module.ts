import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/entities/car.entity';
import { DriversModule } from 'src/domain/drivers/drivers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Car]), DriversModule],
  providers: [CarsService, CarsResolver],
})
export class CarsModule {}
