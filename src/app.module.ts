import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import appConfigSchema from './config/app.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/model/user.model';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('config.database.host'),
        port: configService.get<number>('config.database.port'),
        password: configService.get<string>('config.database.password'),
        username: configService.get<string>('config.database.user'),
        database: configService.get<string>('config.database.name'),
        entities: [User],
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: appConfigSchema,
      envFilePath: '.env',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
