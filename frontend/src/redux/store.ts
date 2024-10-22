import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './Reducers/Products';
import FilterReducer from './Reducers/Filter';
import CartReducer from './Reducers/Cart';

export const store = configureStore({
  reducer: {
    Product: ProductReducer,
    Filter: FilterReducer,
    Cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
