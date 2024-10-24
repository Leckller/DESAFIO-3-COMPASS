import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import CategoryService from "./Category.Service";
import AddCategoryRequestDto from "./Dtos/AddCategory.Request.Dto";

@Controller('/category')
export default class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ) { }

    @Get(":page")
    public async getCategories(@Param('page') page: number) {

        return await this.categoryService.getCategories(+page);

    }

    @Get('id/:id')
    public async getCategoryById(@Param('id') id: number) {

        return await this.categoryService.getCategoryById(+id);

    }

    @Get('type/:name/:page/:show')
    public async getCategoryByName(@Param() { name, page, show }) {

        return await this.categoryService.getCategoryProductsByName(name, +page, show);

    }

    @Post()
    public async addCategory(@Body() { imageId, name }: AddCategoryRequestDto) {

        return await this.categoryService.addCategory({ imageId, name });

    }

}