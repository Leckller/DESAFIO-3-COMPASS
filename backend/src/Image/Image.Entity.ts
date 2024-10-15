import ProductEntity from "src/Product/Product.Entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ImageEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        default: false
    })
    isCategory: boolean;

    @Column({
        nullable: false
    })
    imageLink: string;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}