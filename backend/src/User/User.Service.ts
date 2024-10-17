import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import UserEntity from "./User.Entity";
import { Repository } from "typeorm";
import NewUserRequestDto from "./Dtos/NewUser.Request.Dto";
import AuthService from "src/Auth/Auth.Service";
import LoginUserRequestDto from "./Dtos/Login.Request.Dto";

@Injectable()
export default class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly authService: AuthService,
    ) { }

    public async register({ email, name, password }: NewUserRequestDto) {

        const userExists = await this.userRepository.findOne({ where: { email } });

        if (userExists) {

            throw new BadRequestException('Esse email já possui cadastro.');

        }

        const encryptedPassword = await this.authService.encrypt(password);

        const user = this.userRepository.create({ email, name, password: encryptedPassword })

        await this.userRepository.save(user);

        const token = this.authService.createToken({ id: user.id, email: user.email, name: user.name });

        return { token: `bearer: ${token}` };

    }

    public async login({ email, password }: LoginUserRequestDto) {

        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {

            throw new NotFoundException("Usuário não encontrado");

        }

        // Compara as senhas, caso n sejam iguais, retorna uma exception.
        await this.authService.compare(password, user.password);

        const token = this.authService.createToken({ id: user.id, email: user.email, name: user.name });

        return { token: `bearer: ${token}` };

    }

}