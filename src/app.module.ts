import {
    BadRequestException,
    Module,
    ValidationError,
    ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConsultsModule } from './modules/consults/consults.module';
import { ClassesModule } from './modules/classes/classes.module';
import { AttendancesModule } from './modules/attendances/attendances.module';
import { SalariesModule } from './modules/salaries/salaries.module';
import { RegisterClassesModule } from './modules/register-classes/register-classes.module';
import { RatesModule } from './modules/rates/rates.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { appConfig } from './common/config';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { parseValidateErrors } from './common/utils/common';
import { mongoDbConfig } from './common/config/mongo.cofig';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from './modules/auth/guards/role.guard';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            load: [appConfig, mongoDbConfig],
        }),
        MongooseModule.forRoot(mongoDbConfig().url),
        AuthModule,
        ConsultsModule,
        ClassesModule,
        AttendancesModule,
        SalariesModule,
        RegisterClassesModule,
        RatesModule,
        ProfilesModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useValue: new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
                transform: true,
                exceptionFactory: (
                    validationErrors: ValidationError[] = [],
                ) => {
                    const errorMessages = parseValidateErrors(validationErrors);
                    return new BadRequestException(errorMessages);
                },
            }),
        },
        { 
            provide: APP_GUARD,
            useClass: RolesGuard
        }
    ],
})
export class AppModule {}
