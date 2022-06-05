import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { DriversService } from 'src/drivers/drivers.service';
import { Car } from 'src/entities/car.entity';
import { Driver } from 'src/entities/driver.entity';
import { Repository } from 'typeorm';
import { CreateCarInput } from './dto/create-car.input';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    private driversService: DriversService,
  ) {}

  // async?

  async findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  async createCar(createCarInput: CreateCarInput): Promise<Car> {
    const newCar = this.carsRepository.create(createCarInput);
    return this.carsRepository.save(newCar);
  }

  async getCar(id: number): Promise<Car> {
    return this.carsRepository.findOneOrFail(id);
  }

  async getDrivers(
    @Args('carId', { type: () => Int }) carId,
  ): Promise<Driver[]> {
    return this.driversService.findDrivers(carId);
  }

  // can add update

  // can add remove
}
