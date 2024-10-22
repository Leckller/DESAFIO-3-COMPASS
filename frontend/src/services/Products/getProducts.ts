import { IProduct } from '../../types/Product.Type';
import { BaseUrl } from '../URL';

export const getProducts = async (page: number = 0): Promise<{ products: IProduct[], count: number }> => {
  const request = await fetch(`${BaseUrl}/product/${page}`);
  const response = await request.json();
  return response;
};
