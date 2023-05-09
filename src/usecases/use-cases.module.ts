import { Module } from '@nestjs/common';
import { UseCaseCreateProduct } from './product/create-usecase';
import { UseCaseListProduct } from './product/list-all-usecase';
import { UseCaseFindOneProduct } from './product/find-one-usecase';
import { RepositoryModule } from 'src/infra/database/repositories/repository.module';

const useCases = [
  //products
  UseCaseCreateProduct,
  UseCaseListProduct,
  UseCaseFindOneProduct,
];

@Module({
  imports: [RepositoryModule],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCaseModule {}
