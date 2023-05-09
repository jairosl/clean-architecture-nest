import { Module } from '@nestjs/common';
import { UseCaseCreateProduct } from './product/create-usecase';
import { UseCaseListProduct } from './product/list-all-usecase';
import { UseCaseFindOneProduct } from './product/find-one-usecase';
import { UseCaseUpdateProduct } from './product/updated-usecase';
import { RepositoryModule } from 'src/infra/database/repositories/repository.module';
import { UseCaseCreateCart } from './cart/create-usecase';
import { UseCaseShowCart } from './cart/show-usecase';

const useCases = [
  //products
  UseCaseCreateProduct,
  UseCaseListProduct,
  UseCaseFindOneProduct,
  UseCaseUpdateProduct,

  //cart
  UseCaseCreateCart,
  UseCaseShowCart,
];

@Module({
  imports: [RepositoryModule],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCaseModule {}
