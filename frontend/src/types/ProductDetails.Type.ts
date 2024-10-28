import { IProduct } from './Product.Type';

type ImageDetail = {
  id: number;
  imageLink: string;
};

export type ProductImage = {
  id: number;
  image: ImageDetail;
};

type Category = {
  id: number;
  name: string;
};

type Color = {
  id: number;
  color: string;
};

type Size = {
  id: number;
  size: string;
};

type Review = {
  id: number;
  stars: number;
  comment: string;
};

type Tag = {
  id: number;
  tag: {
    id: number;
    name: string;
  }
};

export type IProductDetails = {
  id: number;
  name: string;
  sku: string;
  description: string;
  large_description: string;
  price: number;
  discount_percent: number;
  create_date: string;
  update_date: string;
  images: ProductImage[]; // Array de imagens
  category: Category;
  colors: Color[]; // Array de cores
  sizes: Size[]; // Array de tamanhos
  reviews: Review[]; // Array de reviews
  relatedProducts: IProduct[];
  tags: Tag[]
};
