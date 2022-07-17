// import { ExecutionContext, Injectable } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class ActivateSession extends AuthGuard('local') {
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     try {
//       const req = GqlExecutionContext.create(context).getContext().req;
//       await super.logIn(req);
//       return req ? true : false;
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class ActivateSession extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const req = GqlExecutionContext.create(context).getContext().req;
    await super.logIn(req);
    console.log(req);
    return req;
  }
}
