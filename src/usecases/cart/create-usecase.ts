import { Inject, Injectable } from '@nestjs/common';
import {
  ProductRepositoryToken,
  IProductRepository,
} from '../../domain/repositories/productRepository';
import {
  ICartRepository,
  CartRepositoryToken,
} from '../../domain/repositories/cartRepository';
import { ProductNotFoundError } from 'src/domain/errors/product/product-not-found';

@Injectable()
export class UseCaseCreateCart {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,

    @Inject(CartRepositoryToken)
    private readonly cartRepository: ICartRepository,
  ) {}

  async execute(uid: string, count: number): Promise<void> {
    const product = await this.productRepository.findByUID(uid);

    if (!product) throw new ProductNotFoundError();

    this.cartRepository.addProduct(product, count);

    return;
  }
}
