import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from 'src/domain/driver/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  providers: [DriverService],
  exports: [DriverService],
})
export class DriverModule {}
