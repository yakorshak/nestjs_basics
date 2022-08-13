import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { IUser, IUserCreate } from './interfaces/user.interfaces';
import * as bcrypt from 'bcrypt';
import { Role } from '../auth/enums/role.enum';
import { RolesEntity } from './entities/roles.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(RolesEntity)
    private rolesRepository: Repository<RolesEntity>,
  ) {}

  public async createUser(input: IUserCreate): Promise<IUser> {
    const { password } = input;
    const hashPassword = await bcrypt.hashSync(password, 7);
    input.password = hashPassword;

    const rolesName = [Role.User];
    const roles = await Promise.all(
      rolesName.map((elem) => this.preloadRoleByName(elem)),
    );

    const user = await this.userRepository.create({
      ...input,
      roles,
    });

    const createdUser = await this.userRepository.save(user);

    return createdUser;
  }

  public async findUser(username: string): Promise<IUser | undefined> {
    const user = await this.userRepository.findOne({
      where: { username: username },
      relations: ['roles'],
    });

    if (!user) {
      throw new NotFoundException(`Car with username #${username} not found`);
    }

    return user;
  }

  public async findAllUsers(): Promise<IUser[]> {
    const allUsers = await this.userRepository.find({
      relations: ['roles'],
    });

    return allUsers;
  }

  private async preloadRoleByName(name: string): Promise<any> {
    const existingRole = await this.rolesRepository.findOne({ name });

    if (existingRole) {
      return existingRole;
    }

    return this.rolesRepository.create({ name });
  }

  public async grantAdminRoleById(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['roles'],
    });

    if (user.roles) {
      const currentRoles: string[] = user.roles.map((object) => object.name);

      const checkIfAlreadyAdmin =
        currentRoles.find((elem) => elem === Role.Admin) === undefined
          ? false
          : (console.log('the user already admin'), true);

      if (!checkIfAlreadyAdmin) {
        currentRoles.push(Role.Admin);

        const roles = await Promise.all(
          currentRoles.map((elem) => this.preloadRoleByName(elem)),
        );

        const userAdmin = await this.userRepository.preload({
          ...user,
          roles,
        });

        return this.userRepository.save(userAdmin);
      } else {
        return user;
      }
    } else {
      const currentRoles = [Role.Admin];
      const roles = await Promise.all(
        currentRoles.map((elem) => this.preloadRoleByName(elem)),
      );

      const userAdmin = await this.userRepository.preload({
        ...user,
        roles,
      });

      return this.userRepository.save(userAdmin);
    }
  }
}
