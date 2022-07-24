import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { IsAuthGuard } from 'src/domain/auth/guards/is-auth.guard';
import { LogoutGuard } from 'src/domain/auth/guards/logout.guard';
import { IUser } from 'src/domain/user/interfaces/user.interfaces';
import { UserService } from 'src/domain/user/user.service';
import { UserModel } from '../commons/user.model';
import { CreateUserDTO } from '../dto/create-user.input';
import { LogOutUserDTO } from '../dto/logout-user.response';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => UserModel)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserDTO,
  ): Promise<IUser> {
    return this.userService.createUser(createUserInput);
  }

  @UseGuards(LogoutGuard)
  @Query(() => LogOutUserDTO, { description: 'logout to the system' })
  logoutUser(): LogOutUserDTO {
    return { Message: 'Logout successful' };
  }

  @UseGuards(IsAuthGuard)
  @Query(() => UserModel)
  findUser(@Args('username') username: string) {
    return this.userService.findUser(username);
  }

  @UseGuards(IsAuthGuard)
  @Query(() => [UserModel])
  findAllUsers(): Promise<IUser[]> {
    return this.userService.findAllUsers();
  }
}
