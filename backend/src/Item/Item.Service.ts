import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ItemEntity from "./Item.Entity";
import { Repository } from "typeorm";
import ProductEntity from "src/Product/Product.Entity";
import AddItemRequestDto from "./Dtos/AddItem.Request.Dto";
import TokenType from "src/utils/TokenType";
import UserEntity from "src/User/User.Entity";
import RemoveItemRequestDto from "./Dtos/RemoveItem.Request.Dto";

@Injectable()
export default class ItemService {

    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepository: Repository<ItemEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    public async addToCart({ id }: TokenType, { productId }: AddItemRequestDto) {

        const userExists = await this.userRepository
            .findOne({ where: { id } });

        const productExists = await this.productRepository
            .findOne({ where: { id: productId } });

        if (!userExists || !productExists) {

            throw new NotFoundException(
                `${userExists ? "Usuário" : "Produto"} não encontrado.`
            );

        }

        const itemExists = await this.itemRepository
            .findOne({ where: { product: { id: productId }, user: { id } } });

        if (itemExists) {

            throw new BadRequestException("Esse item já está no carrinho")

        }

        const item = this.itemRepository.create({
            product: productExists,
            user: userExists,
        });

        await this.itemRepository.save(item);

        return item;

    }

    public async removeToCart({ id }: TokenType, { itemId }: RemoveItemRequestDto) {

        const itemExists = await this.itemRepository
            .findOne({ where: { id: +itemId }, relations: { user: true } });

        if (!itemExists) {

            throw new NotFoundException("Item não encontrado");

        }

        if (itemExists.user.id !== +id) {

            throw new BadRequestException("Você não tem permissão para fazer isso.")

        }

        await this.itemRepository.remove(itemExists);

        return "Item removido."

    }


}