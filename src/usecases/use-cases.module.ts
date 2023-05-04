import { Module } from '@nestjs/common';
import { UseCaseCreateProduct } from './product/create-usecase';
import { UseCaseListProduct } from './product/list-usecase';
import { RepositoryModule } from 'src/infra/database/repositories/repository.module';

const useCases = [
  //products
  UseCaseCreateProduct,
  UseCaseListProduct,
];

@Module({
  imports: [RepositoryModule],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCaseModule {}
