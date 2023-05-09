import { randomUUID } from 'node:crypto';
import { Product } from 'src/domain/entities/product';
import { CreateProductDto } from 'src/domain/dtos/products/create-product.dto';
import { IProductRepository } from 'src/domain/repositories/productRepository';

export class ProductRepositoryInMemory implements IProductRepository {
  private products: Product[] = [];

  async save(product: CreateProductDto) {
    const newProduct = { id: randomUUID(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  async listAll(): Promise<Product[]> {
    return this.products;
  }

  async findByUID(uid: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id === uid);
  }

  async update(id: string, product: CreateProductDto): Promise<Product> {
    const updatedProduct = this.products.map((current) => {
      if (current.id === id) {
        return {
          ...current,
          product,
        };
      }
      return current;
    });

    this.products = updatedProduct;

    return this.products.find(({ id: productId }) => productId === id);
  }
}
