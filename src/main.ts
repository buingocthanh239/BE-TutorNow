import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './common/config';
import { ValidationExceptionFilter } from './common/filters';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalFilters(new ValidationExceptionFilter());
    await app.listen(appConfig().port);
    console.log('app listening on port ' + appConfig().port);
}
bootstrap();
