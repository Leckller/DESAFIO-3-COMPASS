import { IProduct } from './Product.Type';

type Image = {
  id: number;
  imageLink: string;
};

export interface ICategory {
  id: number;
  name: string;
  image: Image;
}

export interface ICategoryProduct extends ICategory {
  products: IProduct[];
}
