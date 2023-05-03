import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entities/product';
import {
  ProductRepositoryToken,
  IProductRepository,
} from 'src/domain/repositories/productRepository';

@Injectable()
export class useCaseCreateProduct {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(product: Product): Promise<void> {
    await this.productRepository.save(product);
  }
}
