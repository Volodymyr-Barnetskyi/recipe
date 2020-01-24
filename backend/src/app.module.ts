import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import 'reflect-metadata';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './logger.middleware';
import { ItemsResolver } from './items/items.resolver';
@Module({
  imports: [
    GraphQLModule.forRootAsync({
                useFactory: () => ({
                    autoSchemaFile: 'schema.gql',
                    playground: true,
                    debug: true,
                    cors: {
                      credentials: true,
                      origin: true,
                    },
                }),
            }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
          useFindAndModify: false,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService, ItemsResolver],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ItemsController, ItemsResolver);
  }
}
