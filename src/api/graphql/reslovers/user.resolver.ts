import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { IUser } from 'src/domain/user/interfaces/user.interfaces';
import { UserService } from 'src/domain/user/user.service';
import { UserModel } from '../commons/user.model';
import { CreateUserInput } from '../dto/create-user.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => UserModel)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<IUser> {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserModel)
  findUser(@Args('username') username: string) {
    return this.userService.findUser(username);
  }
}
