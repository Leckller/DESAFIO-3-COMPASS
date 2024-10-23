import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductCart } from '../../types/Product.Type';

interface CartState {
  cart: IProductCart[]
}

const initialState: CartState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    editProductInCart(state, { payload }: PayloadAction<IProductCart>) {
      const productIndex = state.cart
        .findIndex(({ product: { id } }) => id === payload.product.id);
      if (productIndex < 0) {
        state.cart = [...state.cart, payload];
        return;
      }
      state.cart[productIndex] = payload;
      state.cart = [...state.cart];
    },
    removeFromCart(state, { payload } : PayloadAction<number>) {
      const filtredCart = state.cart
        .filter(({ product: { id } }) => id !== payload);
      state.cart = [...filtredCart];
    },
  },
});

export const { editProductInCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
