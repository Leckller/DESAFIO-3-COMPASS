import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product.Type';
import { fetchProducts } from '../Thunks/ProductsThunk';
import { ICategory } from '../../types/Category.Type';
import { fetchCategories } from '../Thunks/CategoriesThunk';
import { fetchProductsDetails } from '../Thunks/ProductDetailsThunk';
import { IProductDetails } from '../../types/ProductDetails.Type';
import { ISort } from '../../types/Sort.Type';

interface ProductsState {
  products: IProduct[],
  countProducts: number,
  product: IProductDetails,
  categories: ICategory[],
  loading: boolean,
}

const initialState: ProductsState = {
  products: [],
  countProducts: 0,
  categories: [],
  product: {} as IProductDetails,
  loading: false,
};

export const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    sortProducts(state, action: PayloadAction<ISort>) {
      switch (action.payload) {
        case 'lowest':
          state.products = state.products
            .sort((a, b) => a.price - b.price);
          break;
        case 'highest':
          state.products = state.products
            .sort((a, b) => b.price - a.price);
          break;
        case 'discount':
          state.products = state.products
            .sort((a, b) => b.discount_percent - a.discount_percent);
          break;
        case 'default':
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {
          state.loading = false;
          state.products = action.payload.products;
          state.countProducts = action.payload.count;
        },
      );

    builder
      .addCase(fetchProductsDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProductsDetails.fulfilled,
        (state, action) => {
          state.loading = false;
          state.product = action.payload;
        },
      );

    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action) => {
          state.loading = false;
          state.categories = action.payload;
        },
      );
  },
});

export const { sortProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
