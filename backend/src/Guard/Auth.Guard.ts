import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import AuthService from "../Auth/Auth.Service";

@Injectable()
export default class AuthGuard implements CanActivate {

    constructor(

        private readonly AuthService: AuthService,

    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        try {

            const request = context.switchToHttp().getRequest();

            const { authorization } = request.headers;

            const token = this.extractToken(authorization);

            request.token = token;

            return true;

        } catch (err) {

            return false;

        }


    }

    private extractToken(authorization: string) {

        const [type, token] = authorization.split(' ');

        if (type === 'bearer:') {

            const data = this.AuthService.verifyToken(token);

            return data;

        }

        throw new BadRequestException('Token inválido');

    }

}