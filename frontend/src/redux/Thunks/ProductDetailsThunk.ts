import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductDetails } from '../../services/Products/getProductDetails';

export const fetchProductsDetails = createAsyncThunk(
  'fetchProductsDetails',
  async (id: number) => {
    const response = await getProductDetails(id);
    return response;
  },
);
