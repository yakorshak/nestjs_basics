import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from './auth-gql.guard';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy, GqlAuthGuard],
  exports: [AuthService, GqlAuthGuard, LocalStrategy],
})
export class AuthModule {}
