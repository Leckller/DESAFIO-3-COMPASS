import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISort } from '../../types/Sort.Type';
import { fetchCategoryProducts } from '../Thunks/CategoryProductsThunk';
import { IProduct } from '../../types/Product.Type';

interface FilterState {
  page: number,
  show: number,
  sort: ISort,
  countProducts: number,
  categoryProducts: IProduct[],
  loading: boolean,
}

const initialState: FilterState = {
  page: 0,
  show: 8,
  sort: 'default',
  countProducts: 0,
  loading: false,
  categoryProducts: [],
};

export const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<ISort>) { },
    setShow(state, action: PayloadAction<number>) {
      state.show = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.page = action.payload;
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
          if (state.countProducts < (state.show * state.page)
          && !state.categoryProducts
            .some(({ id }) => products.some((p) => p.id === id))) {
            state.categoryProducts = [
              ...state.categoryProducts,
              ...products,
            ];
            state.countProducts = countProducts;
            return;
          }
          state.countProducts = countProducts;
          state.categoryProducts = products;
        },
      );
  },
});

export const { setShow, setSort, setPage } = FilterSlice.actions;

export default FilterSlice.reducer;
