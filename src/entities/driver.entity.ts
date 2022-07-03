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

  // how being created this property
  // @JoinColumn() under hood?
  @Column()
  @Field((type) => Int)
  carId: number;

  // where it is placed into our DB?
  @ManyToOne(() => Car, (car) => car.drivers, { onDelete: 'CASCADE' })
  @Field((type) => Car, { nullable: true })
  car?: Car;
}
