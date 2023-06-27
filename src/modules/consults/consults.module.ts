import { Module } from '@nestjs/common';
import { ConsultsController } from './consults.controller';
import { ConsultsService } from './consults.service';

@Module({
  controllers: [ConsultsController],
  providers: [ConsultsService]
})
export class ConsultsModule {}
