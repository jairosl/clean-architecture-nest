import { useCaseCreateProduct } from 'src/usecases/product/create-usecase';
import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private readonly createProduct: useCaseCreateProduct) {}

  @Get()
  async listAll() {
    return { hello: 'world' };
  }
}
