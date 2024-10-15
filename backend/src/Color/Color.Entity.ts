import ProductEntity from "src/Product/Product.Entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ColorEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => ProductEntity, (productEntity) => productEntity)
    product: ProductEntity;

    @Column()
    color: string;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}