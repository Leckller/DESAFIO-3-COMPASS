import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ItemEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ProductEntity)
    @JoinColumn()
    product: ProductEntity;

    @ManyToOne(() => UserEntity, userEntity => userEntity.car)
    user: UserEntity;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}