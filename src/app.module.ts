import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './domain/car/car.module';
import { Driver } from './domain/driver/entities/driver.entity';
import { Car } from './domain/car/entities/car.entity';
import { GraphqlModule } from './api/graphql/graphql.module';
import { ShopModule } from './domain/shop/shop.module';
import { ShopEntity } from './domain/shop/entities/shop.entity';
import { DriverModule } from './domain/driver/driver.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_SERVER || '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mysql',
      autoLoadEntities: true,
      entities: [Car, Driver, ShopEntity],
      synchronize: true,
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
    CarModule,
    DriverModule,
    GraphqlModule,
    ShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
