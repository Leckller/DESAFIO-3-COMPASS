import ItemEntity from "src/Item/Item.Entity";
import LikeEntity from "src/Like/Like.Entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => ItemEntity, (itemEntity) => itemEntity.user)
    car: ItemEntity[];

    @OneToMany(() => LikeEntity, (likeEntity) => likeEntity.user)
    likes: LikeEntity[];

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}