import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../../services/Categories/getCategories';

export const fetchCategories = createAsyncThunk(
  'fetchCategories',
  async () => {
    const response = await getCategories();
    return response;
  },
);
