import { Body, Controller, Get, Post } from '@nestjs/common';
import { UseCaseCreateCart } from 'src/usecases/cart/create-usecase';
import { UseCaseShowCart } from './../../usecases/cart/show-usecase';
import { AddProductInCart } from './validations/add-product-in-cart';

@Controller('cart')
export class CartController {
  constructor(
    private readonly createCart: UseCaseCreateCart,
    private readonly showCart: UseCaseShowCart,
  ) {}

  @Get() async show() {
    return this.showCart.execute();
  }

  @Post()
  async create(@Body() { id, count }: AddProductInCart) {
    return this.createCart.execute(id, count);
  }
}
