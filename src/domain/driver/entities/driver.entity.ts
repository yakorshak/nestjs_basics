import { ICar } from 'src/domain/car/interfaces/car.interfaces';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarEntity } from '../../car/entities/car.entity';
import { IDriver } from '../interfaces/driver.interfaces';

@Entity()
export class DriverEntity implements IDriver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  carId: number;

  // where it is placed into our DB?
  @ManyToOne(() => CarEntity, (car) => car.drivers, { onDelete: 'CASCADE' })
  car?: ICar;
}
