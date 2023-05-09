import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AddProductInCart {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  count: number;
}
