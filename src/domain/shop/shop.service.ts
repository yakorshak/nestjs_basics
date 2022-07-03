import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopEntity } from './entities/shop.entity';
import { IShop, IShopCreate } from './interfaces/shop.interfaces';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private repo: Repository<ShopEntity>,
  ) {}

  public async createOneShop(input: IShopCreate): Promise<IShop> {
    const entity = await this.repo.create(input);
    const isnertResult = await this.repo.save(entity);
    return isnertResult;
  }
}
