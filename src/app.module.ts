import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CarsModule } from './cars/cars.module';
import { join } from 'path';
import { DriversModule } from './drivers/drivers.module';
import { Driver } from './entities/driver.entity';
import { Car } from './entities/car.entity';

console.log({
  type: 'mysql',
  host: process.env.DB_SERVER || '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'mysql',
  entities: [Car, Driver],
  synchronize: true,
});

console.log(process.env);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_SERVER || '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mysql',
      entities: [Car, Driver],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CarsModule,
    DriversModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
