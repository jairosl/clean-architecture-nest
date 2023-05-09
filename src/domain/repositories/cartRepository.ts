import { Cart } from '../entities/cart';
import { Product } from '../entities/product';

export interface ICartRepository {
  addProduct: (product: Product, count: number) => Promise<void>;
  deleteProduct: (uid: string) => Promise<void>;
  show: () => Promise<Cart | null>;
}

export const CartRepositoryToken = 'ICartRepository';
