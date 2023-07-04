import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.schema';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema}]),
        PassportModule,
       
        JwtModule.registerAsync({
            imports: [ ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('SECRET_KEY'),
                signOptions: { expiresIn: configService.get<string>('EXPIRES')}
            }),
            inject: [ConfigService]
            
        })
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
