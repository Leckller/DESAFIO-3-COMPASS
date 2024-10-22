import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './Reducers/Products';
import FilterReducer from './Reducers/Filter';

export const store = configureStore({
  reducer: {
    Product: ProductReducer,
    Filter: FilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
