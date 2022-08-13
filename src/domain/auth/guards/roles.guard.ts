import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { isObject } from 'class-validator';
import { ROLES_KEY } from '../decorators/role.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const { user } = request;

    if (isObject(user.roles[0])) {
      const transformedRoles = user.roles.map((object) => object.name);
      user.roles = transformedRoles;
      const result = requiredRoles.some((role) => user.roles?.includes(role));

      return result;
    }

    const result = requiredRoles.some((role) => user.roles?.includes(role));

    return result;
  }
}
