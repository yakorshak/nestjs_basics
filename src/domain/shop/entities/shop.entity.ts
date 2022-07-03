import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IShop } from '../interfaces/shop.interfaces';

@Entity()
export class ShopEntity implements IShop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;
}
