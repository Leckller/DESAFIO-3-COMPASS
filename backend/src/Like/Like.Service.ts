import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import LikeEntity from "./Like.Entity";
import { Repository } from "typeorm";
import TokenType from "src/utils/TokenType";
import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";

@Injectable()
export default class LikeService {

    constructor(
        @InjectRepository(LikeEntity)
        private readonly likeRepository: Repository<LikeEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    public async toggleLike({ id }: TokenType, productId: number) {

        const userExists = await this.userRepository
            .findOne({ where: { id } });

        const productExists = await this.productRepository
            .findOne({ where: { id: productId } });

        if (!userExists || !productExists) {

            throw new NotFoundException(
                `${userExists ? "Usuário" : "Produto"} não encontrado.`
            );

        }

        const likeExists = await this.likeRepository
            .findOne({ where: { product: { id: productId }, user: { id } } });

        if (likeExists) {

            await this.likeRepository.remove(likeExists);

            return "Like removido";

        }

        const like = this.likeRepository.create({
            user: { id },
            product: { id: productId }
        })

        await this.likeRepository.save(like);

        return like;
    }

    public async getLikes({ id }: TokenType) {

        const likes = await this.likeRepository
            .find({
                where: { user: { id } },
                relations: {
                    product: {
                        images: true
                    },
                }
            });

        return likes;

    }

}