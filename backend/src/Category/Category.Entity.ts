import ImageEntity from "src/Image/Image.Entity";
import ProductEntity from "src/Product/Product.Entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @OneToMany(() => ProductEntity, (productEntity) => productEntity.category)
    products: ProductEntity[];

    @OneToOne(() => ImageEntity)
    @JoinColumn()
    image: ImageEntity;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}