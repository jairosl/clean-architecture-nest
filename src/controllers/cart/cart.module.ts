import { Module } from '@nestjs/common';

import { CartController } from './cart.controller';
import { UseCaseModule } from 'src/usecases/use-cases.module';

@Module({
  imports: [UseCaseModule],
  controllers: [CartController],
})
export class CartModule {}
