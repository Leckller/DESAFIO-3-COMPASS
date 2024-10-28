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
      type: 'postgres',
      database: process.env.DATABASE_NAME || 'furniro',
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      host: process.env.DATABASE_HOST || "localhost",
      port: +process.env.DATABASE_PORT || 3000,
      synchronize: true,
      entities: [...Entities]
    }),
    JwtModule.register({
      global: true,
      secret: "compass is amazing!",
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
