import { BaseUrl } from '../URL';

export const categories = async (page: number = 0) => {
  const request = await fetch(`${BaseUrl}/category/${page}`);
  const response = await request.json();
  return response;
};
