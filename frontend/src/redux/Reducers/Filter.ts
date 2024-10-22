import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISort } from '../../types/Sort.Type';

interface FilterState {
  page: number,
  show: number,
  sort: ISort,
}

const initialState: FilterState = {
  page: 0,
  show: 8,
  sort: 'default',
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
});

export const { setShow, setSort, setPage } = FilterSlice.actions;

export default FilterSlice.reducer;
