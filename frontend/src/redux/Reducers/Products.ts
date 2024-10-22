import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product.Type';
import { fetchCategoryProducts } from '../Thunks/CategoryProductsThunk';
import { fetchProducts } from '../Thunks/ProductsThunk';
import { ICategory } from '../../types/Category.Type';
import { fetchCategories } from '../Thunks/CategoriesThunk';
import { fetchProductsDetails } from '../Thunks/ProductDetailsThunk';
import { IProductDetails } from '../../types/ProductDetails.Type';

interface ProductsState {
  products: IProduct[],
  product: IProductDetails,
  categories: ICategory[],
  loading: boolean,
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  product: {} as IProductDetails,
  loading: false,
};

export const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {
          state.loading = false;
          state.products = action.payload;
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

    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCategoryProducts.fulfilled,
        (state, action) => {
          state.loading = false;
          state.products = action.payload.products;
        },
      );
  },
});

// export const { } = ProductsSlice.actions;

export default ProductsSlice.reducer;
