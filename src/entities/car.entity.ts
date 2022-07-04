import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DriversModel } from 'src/api/graphql/commons/drivers.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Driver } from '../domain/drivers/entities/driver.entity';

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

  // where it is placed into our DB?
  @OneToMany(() => Driver, (drivers) => drivers.car)
  @Field((type) => [DriversModel], { nullable: true })
  drivers?: Driver[];
}
