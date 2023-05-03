import { Module } from '@nestjs/common';
import { UseCaseModule } from 'src/usecases/use-cases.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [UseCaseModule, ProductModule],
})
export class ControllerModule {}
