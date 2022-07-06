import { IDriver } from 'src/domain/driver/interfaces/driver.interfaces';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DriverEntity } from '../../driver/entities/driver.entity';
import { ICar } from '../interfaces/car.interfaces';

@Entity()
export class CarEntity implements ICar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  color: string;

  @OneToMany(() => DriverEntity, (drivers) => drivers.car)
  drivers?: IDriver[];
}
