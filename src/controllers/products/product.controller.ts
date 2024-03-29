import { Controller, Get, Body, Post, Param, Put } from '@nestjs/common';
import { CreateProductDto } from 'src/domain/dtos/products/create-product.dto';
import { UpdateProductDto } from 'src/domain/dtos/products/update-product.sto';
import { UseCaseCreateProduct } from 'src/usecases/product/create-usecase';
import { UseCaseFindOneProduct } from 'src/usecases/product/find-one-usecase';
import { UseCaseListProduct } from 'src/usecases/product/list-all-usecase';
import { UseCaseUpdateProduct } from 'src/usecases/product/updated-usecase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProduct: UseCaseCreateProduct,
    private readonly listAllProduct: UseCaseListProduct,
    private readonly findOneProduct: UseCaseFindOneProduct,
    private readonly updatedProduct: UseCaseUpdateProduct,
  ) {}

  @Get()
  async listAll() {
    return await this.listAllProduct.execute();
  }

  @Get(':uid')
  async findOne(@Param('uid') uid: string) {
    return this.findOneProduct.execute(uid);
  }

  @Post()
  async create(@Body() product: CreateProductDto) {
    return this.createProduct.execute(product);
  }

  @Put(':uid')
  async updated(@Param('uid') uid: string, @Body() product: UpdateProductDto) {
    return this.updatedProduct.execute(uid, product);
  }
}
