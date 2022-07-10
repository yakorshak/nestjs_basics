import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from 'src/domain/car/entities/car.entity';
import { DriverModule } from 'src/domain/driver/driver.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity]), DriverModule],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
