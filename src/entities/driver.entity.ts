import { Entity, ManyToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Driver {
  id: number;
  name: string;
  surname: string;
  phone: string | number;

  // тут я остановился
  @ManyToOne(() => Car, (car) => car.driver)
  car: Car;
}
