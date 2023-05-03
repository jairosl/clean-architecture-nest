import { Product } from '../entities/product';

export interface IProductRepository {
  save: (product: Product) => Promise<void>;
}

export const ProductRepositoryToken = 'IProductRepository';
