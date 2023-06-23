import {
    ArgumentsHost,
    BadRequestException,
    Catch,
    ExceptionFilter,
    HttpStatus,
  } from '@nestjs/common';
  
  @Catch(BadRequestException)
  export class ValidationExceptionFilter
    implements ExceptionFilter<BadRequestException>
  {
    public catch(exception, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        error: `Unprocessable Entity`,
        message: exception?.response,
      });
    }
  }
  