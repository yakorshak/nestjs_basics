import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from './guards/auth-gql.guard';
import { IsAuthGuard } from './guards/isAuth.guard';
import { SessionSerializer } from './session.serializer';
import { ActivateSession } from './guards/activate-session.guard';
import { RolesGuard } from './guards/roles.guard';
import { LogoutGuard } from './guards/logout.guard';

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [
    AuthService,
    LocalStrategy,
    GqlAuthGuard,
    IsAuthGuard,
    SessionSerializer,
    ActivateSession,
    RolesGuard,
    LogoutGuard,
  ],
  exports: [
    AuthService,
    // GqlAuthGuard,
    // LocalStrategy,
    // IsAuthGuard,
    // ActivateSession,
    // SessionSerializer,
  ],
})
export class AuthModule {}
