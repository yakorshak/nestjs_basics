import { Query, Req, Session, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/domain/auth/auth.service';
import { GqlAuthGuard } from 'src/domain/auth/guards/auth-gql.guard';
import { LoginResponseDTO } from '../dto/login-user.response';
import { LoginUserInput } from '../dto/login-user.input';
import { ActivateSession } from 'src/domain/auth/guards/activate-session.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDTO)
  @UseGuards(GqlAuthGuard, ActivateSession)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Req() req,
  ): Promise<any> {
    return this.authService.login(loginUserInput, req);
  }
}
