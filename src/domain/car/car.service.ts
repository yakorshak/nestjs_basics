import { Injectable, NotFoundException } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverService } from 'src/domain/driver/driver.service';
import { CarEntity } from 'src/domain/car/entities/car.entity';
import { Repository } from 'typeorm';
import { IDriver } from '../driver/interfaces/driver.interfaces';
import { ICar, ICarCreate, ICarUpdateData } from './interfaces/car.interfaces';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private carsRepository: Repository<CarEntity>,
    private driversService: DriverService,
  ) {}

  async findAll(): Promise<ICar[]> {
    return await this.carsRepository.find();
  }

  async createCar(createCarInput: ICarCreate): Promise<ICar> {
    const newCar = this.carsRepository.create(createCarInput);

    return this.carsRepository.save(newCar);
  }

  async getCar(id: number): Promise<ICar> {
    const car = await this.carsRepository.findOne(id);

    if (!car) {
      throw new NotFoundException(`Car with id #${id} not found`);
    }

    return car;
  }

  async getDrivers(
    @Args('carId', { type: () => Int }) carId,
  ): Promise<IDriver[]> {
    return this.driversService.findDrivers(carId);
  }

  async updateCar(id: number, updateCarInput: ICarUpdateData): Promise<ICar> {
    const updatedCar = await this.carsRepository.findOne({
      where: { id },
    });

    if (!updatedCar) {
      throw new NotFoundException(`Car with id #${id} not found`);
    }

    Object.assign(updatedCar, updateCarInput);

    return await this.carsRepository.save(updatedCar);
  }

  async deleteCar(id: number): Promise<any> {
    const carToDelete = await this.carsRepository.findOne({
      where: { id },
    });

    if (!carToDelete) {
      throw new NotFoundException(`Car with id #${id} not found`);
    }

    return await this.carsRepository.remove(carToDelete);
  }
}
