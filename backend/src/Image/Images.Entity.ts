import ProductEntity from "src/Product/Product.Entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import ImageEntity from "./Image.Entity";

@Entity()
export default class ImagesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProductEntity, (productEntity) => productEntity.images)
    product: ProductEntity;

    @OneToOne(() => ImageEntity)
    @JoinColumn()
    image: ImageEntity;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;
}