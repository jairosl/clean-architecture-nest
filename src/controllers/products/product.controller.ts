import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/domain/dtos/products/create-product.dto';
import { UseCaseCreateProduct } from 'src/usecases/product/create-usecase';
import { UseCaseListProduct } from 'src/usecases/product/list-usecase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProduct: UseCaseCreateProduct,
    private readonly listProduct: UseCaseListProduct,
  ) {}

  @Get()
  async listAll() {
    return await this.listProduct.execute();
  }

  @Post()
  async create(@Body() product: CreateProductDto) {
    await this.createProduct.execute(product);
    return;
  }
}
