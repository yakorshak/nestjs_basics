import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverEntity } from 'src/domain/driver/entities/driver.entity';
import { Repository } from 'typeorm';
import { IDriver, IDriverCreate } from './interfaces/driver.interfaces';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverEntity)
    private driversRepository: Repository<DriverEntity>,
  ) {}

  async findOne(id: number): Promise<IDriver> {
    const driver = await this.driversRepository.findOne(id);

    if (!driver) {
      throw new NotFoundException(`Driver with id #${id} not found`);
    }

    return driver;
  }

  async createDriver(createDriverInput: IDriverCreate): Promise<IDriver> {
    const newDriver = await this.driversRepository.create(createDriverInput);

    return this.driversRepository.save(newDriver);
  }

  async findDrivers(carId: number): Promise<IDriver[]> {
    return await this.driversRepository.find({
      where: { carId: carId },
    });
  }
}
