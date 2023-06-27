import { Module } from '@nestjs/common';
import { RegisterClassesController } from './register-classes.controller';
import { RegisterClassesService } from './register-classes.service';

@Module({
  controllers: [RegisterClassesController],
  providers: [RegisterClassesService]
})
export class RegisterClassesModule {}
