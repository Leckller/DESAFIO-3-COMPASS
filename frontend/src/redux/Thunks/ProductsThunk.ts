import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../services/Products/getProducts';
import { ISort } from '../../types/Sort.Type';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async ({ page = 0, show = 8, sort = 'default' }: { page: number, show: number, sort: ISort }) => {
    const response = await getProducts(page, show, sort);
    return { ...response, sort };
  },
);
