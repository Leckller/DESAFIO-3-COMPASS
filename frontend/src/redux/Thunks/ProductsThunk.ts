import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../services/Products/getProducts';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (page: number = 0) => {
    const response = await getProducts(page);
    return response;
  },
);
