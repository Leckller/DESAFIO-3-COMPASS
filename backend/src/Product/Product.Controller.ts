import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import ProductService from "./Product.Service";

@Controller('/Product')
export default class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    @Get()
    public async getProducts(@Param('page') page: number) {

        return await this.productService.getProducts(+page);

    }

    @Post()
    public async addProduct(@Body() { }) {

        return await this.productService.addProduct();

    }

}