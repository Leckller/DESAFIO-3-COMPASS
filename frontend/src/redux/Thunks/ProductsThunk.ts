import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../services/Products/getProducts';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async ({ page = 0, show = 8 }: { page: number, show: number }) => {
    const response = await getProducts(page, show);
    return response;
  },
);
