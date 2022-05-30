import { Entity } from 'typeorm';

@Entity()
export class Car {
  id: number;
  brand: string;
  model: string;
  color: string;
  driver?: [];
}
