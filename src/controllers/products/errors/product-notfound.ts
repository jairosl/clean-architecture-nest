import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductResourceNotFoundException extends HttpException {
  constructor() {
    super('Product not found', HttpStatus.NOT_FOUND);
  }
}
