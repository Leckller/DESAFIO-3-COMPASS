import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ClickerState {
  clicks: number;
}

const initialState: ClickerState = {
  clicks: 0,
};

export const ClickerSlice = createSlice({
  name: 'Clicker',
  initialState,
  reducers: {},
});

// Exportando as actions!
export const { } = ClickerSlice.actions;

// Exportando o Reducer com padrão default!
export default ClickerSlice.reducer;
