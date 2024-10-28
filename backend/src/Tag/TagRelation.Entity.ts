import ProductEntity from "src/Product/Product.Entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TagEntity from "./Tag.Entity";

@Entity()
export default class TagRelationEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TagEntity, (tagEntity) => tagEntity.tagRelation)
  tag: TagEntity;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.tags)
  product: ProductEntity;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  update_date: Date;

};