import { BaseUrl } from '../URL';

export const getProducts = async (page: number = 0) => {
  const request = await fetch(`${BaseUrl}/product/${page}`);
  const response = await request.json();
  return response;
};
