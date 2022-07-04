import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../../entities/car.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // how being created this property
  // @JoinColumn() under hood?
  @Column()
  carId: number;

  // where it is placed into our DB?
  @ManyToOne(() => Car, (car) => car.drivers, { onDelete: 'CASCADE' })
  car?: Car;
}
