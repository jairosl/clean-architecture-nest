import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/domain/dtos/products/create-product.dto';
import {
  ProductRepositoryToken,
  IProductRepository,
} from '../../domain/repositories/productRepository';
import { Product } from 'src/domain/entities/product';

@Injectable()
export class UseCaseCreateProduct {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(product: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(product);
  }
}
