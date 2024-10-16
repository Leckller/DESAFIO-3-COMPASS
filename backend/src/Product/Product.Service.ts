import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ProductEntity from "./Product.Entity";
import { Repository } from "typeorm";

@Injectable()
export default class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }


    public async getProducts(page: number = 0) {

        try {

            const pages = await this.productRepository
                .find({ skip: page * 10, take: 8 });

            return pages;

        } catch {

            return []

        }

    }

    public async addProduct() {



    }

}