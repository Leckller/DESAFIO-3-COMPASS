import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryProductsByName } from '../../services/Categories/getCategoryProducts';
import { ISort } from '../../types/Sort.Type';

export const fetchCategoryProducts = createAsyncThunk(
  'fetchCategoryProducts',
  async ({ category, page, show, sort = 'default' }: { category: string, page: number, show: number, sort: ISort }) => {
    const response = await getCategoryProductsByName(category, page || 0, show || 8, sort);
    return { ...response, sort };
  },
);
