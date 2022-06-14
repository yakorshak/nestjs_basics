import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity()
@ObjectType()
export class Driver {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  // как формируется этот параметр?
  // @JoinColumn()? под капотом?
  @Column()
  @Field((type) => Int)
  carId: number;

  @ManyToOne(() => Car, (car) => car.drivers, { onDelete: 'CASCADE' })
  @Field((type) => Car, { nullable: true })
  car: Car;
}
