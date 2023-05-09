import { Inject, Injectable } from '@nestjs/common';

import {
  ICartRepository,
  CartRepositoryToken,
} from '../../domain/repositories/cartRepository';

import { Cart } from '../../domain/entities/cart';

@Injectable()
export class UseCaseShowCart {
  constructor(
    @Inject(CartRepositoryToken)
    private readonly cartRepository: ICartRepository,
  ) {}

  async execute(): Promise<Cart | null> {
    return this.cartRepository.show();
  }
}
