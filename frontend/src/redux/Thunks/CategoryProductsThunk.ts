import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryProductsByName } from '../../services/Categories/getCategoryProducts';

export const fetchCategoryProducts = createAsyncThunk(
  'fetchCategoryProducts',
  async (category: string) => {
    const response = await getCategoryProductsByName(category);
    return response;
  },
);
