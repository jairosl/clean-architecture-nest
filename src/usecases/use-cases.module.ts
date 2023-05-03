import { Module } from '@nestjs/common';
import { useCaseCreateProduct } from './product/create-usecase';
import { RepositoryModule } from 'src/infra/database/repositories/repository.module';

const useCases = [
  //products
  useCaseCreateProduct,
];

@Module({
  imports: [RepositoryModule],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCaseModule {}
