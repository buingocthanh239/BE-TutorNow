import { Module } from '@nestjs/common';
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

@Module({
  imports: [AuthModule, ConsultsModule, ClassesModule, AttendancesModule, SalariesModule, RegisterClassesModule, RatesModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
