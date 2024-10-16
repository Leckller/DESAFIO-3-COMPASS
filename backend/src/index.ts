import CategoryEntity from "./Category/Category.Entity";
import CategoryModule from "./Category/Category.Module";
import ColorEntity from "./Color/Color.Entity";
import ColorModule from "./Color/Color.Module";
import ImageEntity from "./Image/Image.Entity";
import ImageModule from "./Image/Image.Module";
import ImagesEntity from "./Image/Images.Entity";
import ItemEntity from "./Item/Item.Entity";
import ItemModule from "./Item/Item.Module";
import LikeEntity from "./Like/Like.Entity";
import LikeModule from "./Like/Like.Module";
import ProductEntity from "./Product/Product.Entity";
import ProductModule from "./Product/Product.Module";
import ReviewEntity from "./Review/Review.Entity";
import ReviewModule from "./Review/Review.Module";
import SizeEntity from "./Size/Size.Entity";
import SizeModule from "./Size/Size.Module";
import UserEntity from "./User/User.Entity";
import UserModule from "./User/User.Module";


export const Modules = [
    CategoryModule, ColorModule, ImageModule,
    ItemModule, LikeModule, ProductModule,
    ReviewModule, SizeModule, UserModule
];

export const Entities = [
    CategoryEntity, ColorEntity, ImageEntity,
    ItemEntity, LikeEntity, ProductEntity,
    ReviewEntity, SizeEntity, UserEntity,
    ImagesEntity
]