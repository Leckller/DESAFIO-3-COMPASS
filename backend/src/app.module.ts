import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities, Modules } from 'src';

@Module({
  imports: [
    ...Modules,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_PASSWORD || "Ultra secreto",
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: process.env.POSTGRES_DB || 'furniro',
      username: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'password',
      host: process.env.DB_HOST || "localhost",
      port: +process.env.DB_PORT || 3307,
      synchronize: true,
      entities: [...Entities]
    })
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
