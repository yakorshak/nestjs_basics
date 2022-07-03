import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ShopModule } from 'src/domain/shop/shop.module';
import { ShopModel } from './commons/shop.model';
import { ShopResolver } from './reslovers/shop.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ShopModule,
  ],
  controllers: [],
  providers: [ShopModel, ShopResolver],
})
export class GraphqlModule {}
