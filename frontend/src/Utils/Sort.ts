import { IProduct } from "../types/Product.Type";
import { ISort } from "../types/Sort.Type";
import { discount } from "./discount";

export function SortProducts(sort: ISort, products: IProduct[]) {
  switch (sort) {
    case 'lowest':
      products = products
        .sort((a, b) => discount(a.price, a.discount_percent) - discount(b.price, b.discount_percent));
      return products;
    case 'highest':
      products = products
        .sort((a, b) => discount(b.price, b.discount_percent) - discount(a.price, a.discount_percent));
      return products;
    case 'discount':
      products = products
        .sort((a, b) => b.discount_percent - a.discount_percent);
      return products;
    case 'default':
      return products;
    default:
      return products;
  }
}