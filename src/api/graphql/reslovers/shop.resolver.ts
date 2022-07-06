import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IShop } from 'src/domain/shop/interfaces/shop.interfaces';
import { ShopService } from 'src/domain/shop/shop.service';
import { ShopModel } from '../commons/shop.model';
import { CreateShopInput } from '../dto/create-shop.input';

@Resolver()
export class ShopResolver {
  constructor(private shopService: ShopService) {}

  @Mutation(() => ShopModel)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
  ): Promise<IShop> {
    return this.shopService.createOneShop(createShopInput);
  }
}
