import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { IUser, IUserCreate } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(input: IUserCreate): Promise<IUser> {
    const user = await this.userRepository.create(input);
    const createdUser = await this.userRepository.save(user);
    return createdUser;
  }

  public async findUser(username: string): Promise<IUser> {
    const user = await this.userRepository.findOneOrFail({
      where: { username: username },
    });
    return user;
  }
}
