import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserInput } from 'src/api/graphql/dto/login-user.input';
import { IUser, IUserLogged } from '../user/interfaces/user.interfaces';

// bcrypt? +
// to create express session (table of sessions - generete tokens)
// passport.js or @nestjs/passport (read)
// сравнить емайл и хеши паролей
// после вернуть авторизационный токен (вернуть в куки)
// перед каждым эндпоинтом проверка авторизации (есть ли юзер, его токен)
// Guard - проверка над эндпоинтом
// авторизация имеет ли доступ к эндпоинту

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserInput: LoginUserInput): Promise<IUserLogged> {
    const user = await this.userService.findUser(loginUserInput.username);
    const { password, ...result } = user;
    return result;
    // return {
    //   sessionId,
    //   user
    // }
  }
}
