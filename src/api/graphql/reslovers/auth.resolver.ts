import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/domain/auth/auth.service';
import { GqlAuthGuard } from 'src/domain/auth/auth-gql.guard';
import { LoginResponseDTO } from '../dto/login-user.response';
import { LoginUserInput } from '../dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDTO)
  @UseGuards(GqlAuthGuard)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput): Promise<any> {
    return this.authService.login(loginUserInput);
  }
}
