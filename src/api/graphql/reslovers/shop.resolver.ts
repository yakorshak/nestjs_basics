import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ShopEntity } from 'src/domain/shop/entities/shop.entity';
import { ShopService } from 'src/domain/shop/shop.service';
import { ShopModel } from '../commons/shop.model';
import { CreateShopInput } from '../dto/create-shop.input';

@Resolver()
export class ShopResolver {
  constructor(private shopService: ShopService) {}

  //ShopModel?
  @Mutation(() => ShopModel)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
  ): Promise<ShopEntity> {
    return this.shopService.createOneShop(createShopInput);
  }
}
