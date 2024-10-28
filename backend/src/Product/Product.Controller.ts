import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import ProductService from "./Product.Service";
import AddProductRequestDto from "./Dtos/AddProduct.Request.Dto";
import SetDiscountRequestDto from "./Dtos/setDiscount.Request.Dto";
import AuthAdmGuard from "src/Guard/AuthAdm.Guard";

@Controller('/product')
export default class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    @Get('all/:page/:show/:sort')
    public async getProducts(@Param() { page, show, sort }) {

        return await this.productService.getProducts(+page, +show, sort);

    }

    @Get('details/:productName')
    public async getProductByName(@Param('productName') productName: string) {

        return await this.productService.getProductByName(productName);

    }

    @Get('id/:id')
    public async getProductById(@Param('id') productId: string) {

        return await this.productService.getProductById(+productId);

    }

    @UseGuards(AuthAdmGuard)
    @Post()
    public async addProduct(@Body() product: AddProductRequestDto) {

        const {
            category,
            description,
            discount_percent,
            largeDescription,
            name,
            price
        } = product;

        return await this.productService.addProduct({
            category,
            description,
            discount_percent,
            largeDescription,
            name,
            price
        });

    }

    @UseGuards(AuthAdmGuard)
    @Patch()
    public async setDiscount(@Body() { discount, productId }: SetDiscountRequestDto) {

        return await this.productService.setDiscount({ discount, productId })

    }

}