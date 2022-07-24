import { GqlExecutionContext } from '@nestjs/graphql';
import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export class LogoutGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    if (!req.user) {
      throw new UnauthorizedException();
    }

    await req.logout((err) => {
      if (err) {
        return err;
        // return next(err) ?
        // res.redirect('/'), нужно ли получить доступ к res?
      }
    });

    return true;
  }
}
