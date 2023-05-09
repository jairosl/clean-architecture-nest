import { Inject, Injectable } from '@nestjs/common';
import { UpdateProductDto } from '../../domain/dtos/products/update-product.sto';
import {
  ProductRepositoryToken,
  IProductRepository,
} from '../../domain/repositories/productRepository';
import { Product } from '../../domain/entities/product';
import { ProductNotFoundError } from 'src/domain/errors/product/product-not-found';

@Injectable()
export class UseCaseUpdateProduct {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(uid: string, product: UpdateProductDto): Promise<Product> {
    const alreadyExists = await this.productRepository.findByUID(uid);

    if (!alreadyExists) {
      throw new ProductNotFoundError(uid);
    }
    return await this.productRepository.update(uid, product);
  }
}
