import { Module } from '@nestjs/common';
import { ProductRepositoryToken } from 'src/domain/repositories/productRepository';
import { ProductRepositoryInMemory } from './product-repository-in-memory';

@Module({
  providers: [
    {
      provide: ProductRepositoryToken,
      useClass: ProductRepositoryInMemory,
    },
  ],
  exports: [ProductRepositoryToken],
})
export class RepositoryModule {}
