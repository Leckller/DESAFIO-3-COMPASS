import CategoryEntity from "src/Category/Category.Entity";
import ColorEntity from "src/Color/Color.Entity";
import ImageEntity from "src/Image/Image.Entity";
import ReviewEntity from "src/Review/Review.Entity";
import SizeEntity from "src/Size/Size.Entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        length: 50,
    })
    name: string;

    @Column({
        nullable: false,
        length: 10,
    })
    sku: string;

    @Column({
        nullable: false,
        length: 250
    })
    description: string

    @Column({
        nullable: false,
        length: 500
    })
    large_description: string

    @Column({
        nullable: false,
    })
    price: number;

    @Column({
        default: 0
    })
    discount_percent: number;

    @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.products)
    category: CategoryEntity;

    @OneToMany(() => ImageEntity, (imageEntity) => imageEntity.product)
    images: ImageEntity[];

    @OneToMany(() => ReviewEntity, (reviewEntity) => reviewEntity.product)
    reviews: ReviewEntity[];

    @OneToMany(() => SizeEntity, (sizeEntity) => sizeEntity.product)
    sizes: SizeEntity[];

    @OneToMany(() => ColorEntity, (colorEntity) => colorEntity.product)
    colors: ColorEntity[];

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}