import { Inject, Injectable } from '@nestjs/common';
import {
  ProductRepositoryToken,
  IProductRepository,
} from '../../domain/repositories/productRepository';
import { Product } from '../../domain/entities/product';
import { ProductNotFoundError } from '../../domain/errors/product/product-not-found';

@Injectable()
export class UseCaseFindOneProduct {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(uid: string): Promise<Product> {
    const product = await this.productRepository.findByUID(uid);

    if (!product) {
      throw new ProductNotFoundError(uid);
    }

    return product;
  }
}
