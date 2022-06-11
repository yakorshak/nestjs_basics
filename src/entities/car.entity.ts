import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Driver } from './driver.entity';

@Entity()
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  brand: string;

  @Column()
  @Field()
  color: string;

  @OneToMany(() => Driver, (drivers) => drivers.car)
  @Field((type) => [Driver], { nullable: true })
  drivers?: Driver[];
}
