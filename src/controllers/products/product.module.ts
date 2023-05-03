import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { UseCaseModule } from 'src/usecases/use-cases.module';

@Module({
  imports: [UseCaseModule],
  controllers: [ProductController],
})
export class ProductModule {}
