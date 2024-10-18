import { ICategory } from '../../types/Category.Type';
import { BaseUrl } from '../URL';

export const getCategories = async (page: number = 0): Promise<ICategory[]> => {
  const request = await fetch(`${BaseUrl}/category/${page}`);
  const response = await request.json();
  return response;
};
