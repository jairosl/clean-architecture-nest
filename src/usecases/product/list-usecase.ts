import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entities/product';
import {
  ProductRepositoryToken,
  IProductRepository,
} from '../../domain/repositories/productRepository';

@Injectable()
export class UseCaseListProduct {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.listAll();
  }
}
