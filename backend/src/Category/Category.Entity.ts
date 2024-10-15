import ImageEntity from "src/Image/Image.Entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        nullable: false,
    })
    name: string;

    @OneToOne(() => ImageEntity)
    image: ImageEntity;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}