import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class ImageEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        length: 600
    })
    imageLink: string;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}