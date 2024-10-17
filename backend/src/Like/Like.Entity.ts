import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class LikeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, (userEntity) => userEntity)
    user: UserEntity;

    @OneToOne(() => ProductEntity)
    @JoinColumn()
    product: ProductEntity;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}