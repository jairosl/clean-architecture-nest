import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { IError } from 'src/domain/errors/custom';
import { ErrorCodes } from 'src/domain/errors/error-code';
import { ProductResourceNotFoundException } from './products/errors/product-notfound';

@Catch()
export class HandlerErrors implements ExceptionFilter {
  catch(exception: IError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    try {
      switch (exception.code) {
        case ErrorCodes.ProductNotFound:
          throw new ProductResourceNotFoundException();
        default:
          throw exception;
      }
    } catch (error) {
      if (!(error instanceof HttpException)) {
        error = new HttpException(
          'server errors: ',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const status = error.getStatus();

      if (typeof error.getResponse() === 'object') {
        response.json({
          ...error.getResponse(),
        });
      } else {
        response.json({
          status,
          message: error.getResponse(),
          error: exception.code || status,
        });
      }
    }
  }
}
