import { configureStore } from '@reduxjs/toolkit';
import ClickerReducer from './Reducers/Clicker';

export const store = configureStore({
  reducer: {
    Clicker: ClickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;