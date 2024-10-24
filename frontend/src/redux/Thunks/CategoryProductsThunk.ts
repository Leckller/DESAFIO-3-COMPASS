import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryProductsByName } from '../../services/Categories/getCategoryProducts';

export const fetchCategoryProducts = createAsyncThunk(
  'fetchCategoryProducts',
  async ({ category, page, show }: { category: string, page: number, show: number }) => {
    const response = await getCategoryProductsByName(category, page || 0, show || 8);
    return response;
  },
);
