import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TagRelationEntity from "./TagRelation.Entity";

@Entity()
export default class TagEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => TagRelationEntity, (tagRelationEntity) => tagRelationEntity.tag)
  tagRelation: TagRelationEntity[];

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  update_date: Date;

}