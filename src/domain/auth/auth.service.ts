import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from 'src/api/graphql/dto/login-user.input';
import { IUserLogged } from '../user/interfaces/user.interfaces';

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

  async login(loginUserInput: LoginUserDTO): Promise<IUserLogged> {
    const user = await this.userService.findUser(loginUserInput.username);
    const { password, ...result } = user;

    return result;
  }
}
