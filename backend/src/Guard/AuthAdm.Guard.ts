import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import AuthService from "../Auth/Auth.Service";
import TokenType from "src/utils/TokenType";

@Injectable()
export default class AuthAdmGuard implements CanActivate {

  constructor(

    private readonly AuthService: AuthService,

  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    try {

      const request = context.switchToHttp().getRequest();

      const { authorization } = request.headers;


      const token = this.extractToken(authorization);

      if (await this.AuthService.isAdm((token as TokenType).id)) {
        return false;
      }

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