import { CreateProductDto } from '../dtos/products/create-product.dto';
import { UpdateProductDto } from '../dtos/products/update-product.sto';
import { Product } from '../entities/product';

export interface IProductRepository {
  save: (product: CreateProductDto) => Promise<Product>;
  listAll: () => Promise<Product[]>;
  update: (id: string, product: UpdateProductDto) => Promise<Product>;
  findByUID: (uid: string) => Promise<Product | undefined>;
}

export const ProductRepositoryToken = 'IProductRepository';
