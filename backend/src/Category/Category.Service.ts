import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import CategoryEntity from "./Category.Entity";
import { Repository } from "typeorm";
import ImageEntity from "src/Image/Image.Entity";
import AddCategoryRequestDto from "./Dtos/AddCategory.Request.Dto";

@Injectable()
export default class CategoryService {

    constructor(

        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(ImageEntity)
        private readonly imageRepository: Repository<ImageEntity>

    ) { }

    public async getCategories() {

        const categories = await this.categoryRepository
            .find({ relations: { products: true, image: true } });

        return categories;

    }

    public async getCategoryById(id: number) {

        const category = await this.categoryRepository
            .findOne({
                where: { id },
                relations: { products: true, image: true }
            });

        return category;

    }

    public async getCategoryByName(name: string) {

        const category = await this.categoryRepository
            .findOne({
                where: { name },
                relations: { products: true, image: true }
            });

        return category;

    }

    public async addCategory({ imageId, name }: AddCategoryRequestDto) {

        const image = await this.imageRepository.findOne({ where: { id: imageId } })

        if (!image) {

            throw new NotFoundException("Imagem não encontrada.")

        }

        const categoryExists = await this.categoryRepository.findOne({ where: { name } })

        if (categoryExists) {

            throw new BadRequestException('Essa categoria já existe!');

        }

        const imageCategoryInUse = await this.categoryRepository.findOne({ where: { image: { id: imageId } } });

        if (imageCategoryInUse) {

            throw new BadRequestException("Essa imagem já está em uso por outra categoria.")

        }

        const newCategory = this.categoryRepository.create({ image, name })

        await this.categoryRepository.save(newCategory);

        return newCategory;

    }

}