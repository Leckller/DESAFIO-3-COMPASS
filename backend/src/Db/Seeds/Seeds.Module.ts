import { Module } from '@nestjs/common';
import SeedsService from './Seeds.Service';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryEntity from 'src/Category/Category.Entity';
import ColorEntity from 'src/Color/Color.Entity';
import ImageEntity from 'src/Image/Image.Entity';
import ImagesEntity from 'src/Image/Images.Entity';
import ProductEntity from 'src/Product/Product.Entity';
import ReviewEntity from 'src/Review/Review.Entity';
import SizeEntity from 'src/Size/Size.Entity';
import TagEntity from 'src/Tag/Tag.Entity';
import TagRelationEntity from 'src/Tag/TagRelation.Entity';
import UserEntity from 'src/User/User.Entity';
import AuthModule from 'src/Auth/Auth.Module';
import AuthService from 'src/Auth/Auth.Service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      ImagesEntity,
      ImageEntity,
      CategoryEntity,
      ProductEntity,
      ColorEntity,
      ReviewEntity,
      SizeEntity,
      TagEntity,
      TagRelationEntity,
      UserEntity,
    ]),
  ],
  providers: [SeedsService, AuthService],
})
export default class SeedModule { }
