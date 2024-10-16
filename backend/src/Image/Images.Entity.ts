import ProductEntity from "src/Product/Product.Entity";
import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import ImageEntity from "./Image.Entity";

@Entity()
export default class ImagesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProductEntity, (productEntity) => productEntity.images)
    product: ProductEntity;

    @OneToMany(() => ImageEntity, (imageEntity) => imageEntity.id)
    images: ImageEntity[];

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;
}