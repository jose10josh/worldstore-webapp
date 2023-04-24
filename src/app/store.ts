import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../slices/productSlice';
import uiSlice from '../slices/uiSlice';
import cartSlice from '../slices/cartSlice';

export const store = configureStore({
  reducer: {
    data: productSlice,
    cart: cartSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
