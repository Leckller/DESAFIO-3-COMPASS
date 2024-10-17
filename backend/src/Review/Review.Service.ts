import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ReviewEntity from "./Review.Entity";
import { Repository } from "typeorm";
import TokenType from "src/utils/TokenType";
import AddReviewRequestDto from "./Dtos/AddReview.Request.Dto";
import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";

@Injectable()
export default class ReviewService {

    constructor(
        @InjectRepository(ReviewEntity)
        private readonly reviewRepository: Repository<ReviewEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        @InjectRepository(UserEntity)
        private readonly UserRepository: Repository<UserEntity>,
    ) { }

    public async getReviewsByProductId(id: number) {

        const reviews = await this.reviewRepository
            .find({ where: { product: { id } } });

        return reviews;

    }

    public async addReviewService(token: TokenType, review: AddReviewRequestDto) {

        const userExists = await this.UserRepository
            .findOne({ where: { id: token.id } });

        const productExists = await this.productRepository
            .findOne({ where: { id: review.productId } });

        if (!userExists || !productExists) {

            throw new NotFoundException(
                `${userExists ? "Usuário" : "Produto"} não encontrado.`
            )

        }

        if (review.stars > 5) { review.stars = 5 };
        if (review.stars < 0) { review.stars = 0 };

        const newReview = this.reviewRepository.create({
            user: userExists,
            product: productExists,
            comment: review.comment,
            stars: +review.stars.toFixed(2),
        })

        await this.reviewRepository.save(newReview);

        return newReview;

    }

}