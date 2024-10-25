import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import ProductService from "./Product.Service";
import AddProductRequestDto from "./Dtos/AddProduct.Request.Dto";
import SetDiscountRequestDto from "./Dtos/setDiscount.Request.Dto";

@Controller('/Product')
export default class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    @Get(':page/:show')
    public async getProducts(@Param() { page, show }) {

        return await this.productService.getProducts(+page, +show);

    }

    @Get('details/:productName')
    public async getProductByName(@Param('productName') productName: string) {

        return await this.productService.getProductByName(productName);

    }

    @Get('id/:id')
    public async getProductById(@Param('id') productId: number) {

        return await this.productService.getProductById(+productId);

    }


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

    @Patch()
    public async setDiscount(@Body() { discount, productId }: SetDiscountRequestDto) {

        return await this.productService.setDiscount({ discount, productId })

    }

}