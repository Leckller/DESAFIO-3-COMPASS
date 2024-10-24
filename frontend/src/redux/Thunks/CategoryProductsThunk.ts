import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryProductsByName } from '../../services/Categories/getCategoryProducts';

export const fetchCategoryProducts = createAsyncThunk(
  'fetchCategoryProducts',
  async ({ category, page }: { category: string, page: number }) => {
    const response = await getCategoryProductsByName(category, page || 0);
    return response;
  },
);
