import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from 'src/domain/auth/auth.module';
import { CarModule } from 'src/domain/car/car.module';
import { DriverModule } from 'src/domain/driver/driver.module';
import { ShopModule } from 'src/domain/shop/shop.module';
import { UserModule } from 'src/domain/user/user.module';
import { AuthResolver } from './reslovers/auth.resolver';
import { CarResolver } from './reslovers/car.resolver';
import { DriverResolver } from './reslovers/driver.resolver';
import { ShopResolver } from './reslovers/shop.resolver';
import { UserResolver } from './reslovers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: {
        settings: {
          'editor.theme': 'light', // use value dark if you want a dark theme in the playground
          'request.credentials': 'include',
        },
      },
    }),
    ShopModule,
    UserModule,
    CarModule,
    DriverModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    ShopResolver,
    UserResolver,
    CarResolver,
    DriverResolver,
    AuthResolver,
  ],
})
export class GraphqlModule {}
