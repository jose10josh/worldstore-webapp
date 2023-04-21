import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../slices/productSlice';
import uiSlice from '../slices/uiSlice';

export const store = configureStore({
  reducer: {
    data: productSlice,
    ui: uiSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch