import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarModule } from 'src/domain/car/car.module';
import { DriverModule } from 'src/domain/driver/driver.module';
import { ShopModule } from 'src/domain/shop/shop.module';
import { UserModule } from 'src/domain/user/user.module';
import { CarResolver } from './reslovers/car.resolver';
import { DriverResolver } from './reslovers/driver.resolver';
import { ShopResolver } from './reslovers/shop.resolver';
import { UserResolver } from './reslovers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ShopModule,
    UserModule,
    CarModule,
    DriverModule,
  ],
  controllers: [],
  providers: [ShopResolver, UserResolver, CarResolver, DriverResolver],
})
export class GraphqlModule {}
