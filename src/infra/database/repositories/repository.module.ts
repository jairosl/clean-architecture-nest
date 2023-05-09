import { Module } from '@nestjs/common';
import { ProductRepositoryToken } from 'src/domain/repositories/productRepository';
import { CartRepositoryToken } from 'src/domain/repositories/cartRepository';
import { ProductRepositoryInMemory } from './product-repository-in-memory';
import { CartRepositoryInMemory } from './cart-repository-in-memory';

@Module({
  providers: [
    {
      provide: ProductRepositoryToken,
      useClass: ProductRepositoryInMemory,
    },
    {
      provide: CartRepositoryToken,
      useClass: CartRepositoryInMemory,
    },
  ],
  exports: [ProductRepositoryToken, CartRepositoryToken],
})
export class RepositoryModule {}
