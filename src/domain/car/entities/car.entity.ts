import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Driver } from '../../driver/entities/driver.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  color: string;

  @OneToMany(() => Driver, (drivers) => drivers.car)
  drivers?: Driver[];
}
