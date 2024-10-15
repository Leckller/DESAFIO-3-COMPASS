import UserEntity from "src/User/User.Entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class LikeEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => UserEntity, (userEntity) => userEntity)
    user: UserEntity;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

}