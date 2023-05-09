import { Product } from './product';

export interface Cart {
  id: string;
  total: number;
  products: Array<{
    product: Product;
    count: number;
  }>;
}
