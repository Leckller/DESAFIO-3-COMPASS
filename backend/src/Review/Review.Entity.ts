import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ReviewEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProductEntity, (productEntity) => productEntity)
    product: ProductEntity;

    @ManyToOne(() => UserEntity, (userEntity) => userEntity)
    user: UserEntity;

    @Column({
        default: 5
    })
    stars: number;

    @Column()
    comment: string;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}