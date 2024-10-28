import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product.Type';
import { fetchProducts } from '../Thunks/ProductsThunk';
import { ICategory } from '../../types/Category.Type';
import { fetchCategories } from '../Thunks/CategoriesThunk';
import { fetchProductsDetails } from '../Thunks/ProductDetailsThunk';
import { IProductDetails } from '../../types/ProductDetails.Type';
import { ISort } from '../../types/Sort.Type';
import { fetchCategoryProducts } from '../Thunks/CategoryProductsThunk';
import { SortProducts } from '../../Utils/Sort';

interface ProductsState {
  // Objeto com vários produtos de diferentes categorias
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
      // Organiza os produtos de uma categoria definida
      state.products = SortProducts(action.payload, state.products)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCategoryProducts.fulfilled,
        (state, { payload: { products, countProducts } }) => {
          state.loading = false;
          state.countProducts = countProducts;
          state.products = products;
        },
      );

    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, { payload: { count, products } }) => {
          state.loading = false;
          state.products = products;
          state.countProducts = count;
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
