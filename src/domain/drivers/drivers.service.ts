import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from 'src/domain/drivers/entities/driver.entity';
import { Repository } from 'typeorm';
import { CreateDriverInput } from '../../api/graphql/dto/create-driver.input';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private driversRepository: Repository<Driver>,
  ) {}

  async findOne(id: number): Promise<Driver> {
    return this.driversRepository.findOneOrFail(id);
  }

  async createDriver(createDriverInput: CreateDriverInput): Promise<Driver> {
    const newDriver = this.driversRepository.create(createDriverInput);
    return this.driversRepository.save(newDriver);
  }

  async findDrivers(carId: number): Promise<Driver[]> {
    return this.driversRepository.find({
      where: { carId: carId },
    });
  }
}

// : Promise<any>
//   async deleteDrivers(carId: number) {
//     const driversToDelete = await this.driversRepository.find({
//       where: { carId: carId },
//     });
//     return await this.driversRepository.remove(driversToDelete);
//   }
// }
