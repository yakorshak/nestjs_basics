import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/domain/auth/auth.service';
import { GqlAuthGuard } from 'src/domain/auth/guards/auth-gql.guard';
import { LoginResponseDTO } from '../dto/login-user.response';
import { LoginUserDTO } from '../dto/login-user.input';
import { ActivateSessionGuard } from 'src/domain/auth/guards/activate-session.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDTO)
  @UseGuards(GqlAuthGuard, ActivateSessionGuard)
  login(@Args('loginUserInput') loginUserInput: LoginUserDTO): Promise<any> {
    return this.authService.login(loginUserInput);
  }
}
