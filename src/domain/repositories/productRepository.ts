import { CreateProductDto } from '../dtos/products/create-product.dto';
import { Product } from '../entities/product';

export interface IProductRepository {
  save: (product: CreateProductDto) => Promise<Product>;
  listAll: () => Promise<Product[]>;
  update: (id: string, product: CreateProductDto) => Promise<Product>;
  findByUID: (uid: string) => Promise<Product | undefined>;
}

export const ProductRepositoryToken = 'IProductRepository';
