import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema}])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
