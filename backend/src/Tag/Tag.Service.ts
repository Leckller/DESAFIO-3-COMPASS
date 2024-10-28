import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import TagEntity from "./Tag.Entity";
import TagRelationEntity from "./TagRelation.Entity";
import ProductEntity from "src/Product/Product.Entity";
import { Repository } from "typeorm";
import AddTagRequestDto from "./Dtos/AddTag.Request.Dto";
import AddTagRelationRequestDto from "./Dtos/AddTagRelation.Request.Dto";

@Injectable()
export default class TagService {

  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepo: Repository<TagEntity>,
    @InjectRepository(TagRelationEntity)
    private readonly relationRepo: Repository<TagRelationEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) { }

  public async tags() {

    return await this.tagRepo.find({
      take: 8
    });

  }

  public async addTag({ tagName }: AddTagRequestDto) {

    const tagExists = await this.tagRepo.findOne({ where: { name: tagName } });

    if (tagExists) {

      throw new BadRequestException(`A tag ${tagName} já existe.`)

    }

    const tag = this.tagRepo.create({ name: tagName });

    await this.tagRepo.save(tag);

    return tag;

  }

  public async addTagRelation({ productId, tagId }: AddTagRelationRequestDto) {

    const tagExists = await this.tagRepo.findOne({ where: { id: tagId } });
    const productExists = await this.productRepo.findOne({ where: { id: productId } });

    if (!tagExists || !productExists) {

      throw new NotFoundException(`${tagExists ? "Produto" : "Tag"} não ${tagExists ? 'encontrado' : 'encontrada'}`);

    }

    const relationExists = await this.relationRepo.findOne({
      where: {
        product: { id: productId },
        tag: { id: tagId }
      }
    });

    if (relationExists) {

      throw new BadRequestException(`A tag "${tagExists.name}" e o produto "${productExists.name}" já estão relacionados`);

    }

    const relation = this.relationRepo.create({
      product: productExists,
      tag: tagExists
    });

    await this.relationRepo.save(relation);

    return relation;

  }

};