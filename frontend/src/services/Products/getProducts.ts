import { IProduct } from '../../types/Product.Type';
import { ISort } from '../../types/Sort.Type';
import { BaseUrl } from '../URL';

export const getProducts = async (
  page: number = 0,
  show: number = 8,
  sort: ISort = 'default')
  : Promise<{ products: IProduct[], count: number }> => {
  const request = await fetch(`${BaseUrl}/product/all/${page}/${show}/${sort}`);
  const response = await request.json();
  return response;
};
