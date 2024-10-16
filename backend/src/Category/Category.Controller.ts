import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import CategoryService from "./Category.Service";
import AddCategoryRequestDto from "./Dtos/AddCategory.Request.Dto";

@Controller('/category')
export default class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ) { }

    @Get()
    public async getCategories() {

        return await this.categoryService.getCategories();

    }

    @Get(':id')
    public async getCategoryById(@Param('id') id: number) {

        return await this.categoryService.getCategoryById(+id);

    }

    @Get('type/:name')
    public async getCategoryByName(@Param('name') name: string) {

        return await this.categoryService.getCategoryByName(name);

    }

    @Post()
    public async addCategory(@Body() { imageId, name }: AddCategoryRequestDto) {

        return await this.categoryService.addCategory({ imageId, name });

    }

}