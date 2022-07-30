import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Roles } from 'src/domain/auth/decorators/role.decorator';
import { Role } from 'src/domain/auth/enums/role.enum';
import { IsAuthGuard } from 'src/domain/auth/guards/is-auth.guard';
import { LogoutGuard } from 'src/domain/auth/guards/logout.guard';
import { RolesGuard } from 'src/domain/auth/guards/roles.guard';
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

  // only admin
  @Query(() => UserModel)
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  findUser(@Args('username') username: string) {
    return this.userService.findUser(username);
  }

  //only admin
  @UseGuards(IsAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Query(() => [UserModel])
  findAllUsers(): Promise<IUser[]> {
    return this.userService.findAllUsers();
  }
}
