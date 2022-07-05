import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverService } from 'src/domain/driver/driver.service';
import { Car } from 'src/domain/car/entities/car.entity';
import { Driver } from 'src/domain/driver/entities/driver.entity';
import { Repository } from 'typeorm';
import { CreateCarInput } from '../../api/graphql/dto/create-car.input';
import { updateCarInput } from '../../api/graphql/dto/update-car.input';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    private driversService: DriverService,
  ) {}

  // async when there is few requests into DB, or while each request?

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

  async updateCar(id: number, updateCarInput: updateCarInput): Promise<Car> {
    const updatedCar = await this.carsRepository.findOneOrFail({
      where: { id },
    });
    Object.assign(updatedCar, updateCarInput);
    return await this.carsRepository.save(updatedCar);
  }

  // : Promise<any> ??
  // : Promise<Car>
  async deleteCar(id: number) {
    const carToDelete = await this.carsRepository.findOneOrFail({
      where: { id },
    });
    // cascade?
    // if (carToDelete.drivers) {
    //   this.driversService.deleteDrivers(id);
    // }
    return await this.carsRepository.remove(carToDelete);
  }
}
