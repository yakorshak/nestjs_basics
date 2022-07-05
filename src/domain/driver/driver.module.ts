import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/domain/driver/entities/driver.entity';
import { DriverResolver } from 'src/api/graphql/reslovers/driver.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriverService, DriverResolver],
  exports: [DriverService],
})
export class DriverModule {}
