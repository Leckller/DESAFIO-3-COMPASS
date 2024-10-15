import ProductEntity from "src/Product/Product.Entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ItemEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => ProductEntity, (productEntity) => productEntity)
    products: ProductEntity[];
    
    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}