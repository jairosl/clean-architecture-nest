import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UseCaseModule } from '../usecases/use-cases.module';
import { ProductModule } from './products/product.module';
import { HandlerErrors } from './handlerErrors';

@Module({
  imports: [UseCaseModule, ProductModule],
  providers: [{ provide: APP_FILTER, useClass: HandlerErrors }],
})
export class ControllerModule {}
