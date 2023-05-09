import { randomUUID } from 'node:crypto';
import { Cart } from 'src/domain/entities/cart';
import { Product } from 'src/domain/entities/product';
import { ICartRepository } from '../../../domain/repositories/cartRepository';

export class CartRepositoryInMemory implements ICartRepository {
  private cart: Cart = null;
  async addProduct(product: Product, count: number): Promise<void> {
    if (this.cart === null) {
      this.cart = {
        id: randomUUID(),
        total: product.price,
        products: [
          {
            product,
            count,
          },
        ],
      };
      return;
    }

    const products = this.cart.products.map((currentProduct) => {
      if (currentProduct.product.id === product.id) {
        return {
          ...currentProduct,
          count: currentProduct.count + count,
        };
      }
      return currentProduct;
    });

    const currentTotal = products.reduce((acc, currentValue) => {
      const { count, product: currentProduct } = currentValue;
      return currentProduct.price * count + acc;
    }, 0);

    this.cart = {
      ...this.cart,
      total: currentTotal,
      products,
    };
  }
  deleteProduct: (uid: string) => Promise<void>;
  async show(): Promise<Cart | null> {
    return this.cart;
  }
}
