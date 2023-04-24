import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { RootState } from '../app/store';

interface CartItem {
  id:number,
  product: ProductModel,
  qty: number,
}
interface CartState {
  products: CartItem[],
  total: number
}

const initialState: CartState = {
  products:[],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddToCart: (state, action: PayloadAction<CartItem>) => {
      const sameProduct = state.products.find(product => product.id === action.payload.id);
      if(!sameProduct){
        const newProduct = {
          id: action.payload.id,
          product: action.payload.product,
          qty: action.payload.qty
        };
        state.products = [...state.products, newProduct]
      } else {
        const updateProduct = state.products.map(product => {
          if(product.id === action.payload.id){
            return {
              ...product,
              qty: product.qty + action.payload.qty
            }
          }
          return product
        })
        state.products = updateProduct;
      }
      state.total += (action.payload.product.price * action.payload.qty);
    },
    setRemoveFromCart: (state, action: PayloadAction<{product:CartItem, qty:number}>) => {
      const updateProduct = state.products.map(product => {
        if(product.id === action.payload.product.id){
          return {
            ...product,
            qty: product.qty - action.payload.qty
          }
        }
        return product
      })
      state.products = updateProduct;
      state.total -= (action.payload.product.product.price * action.payload.qty);
    },
    setDeleteFromCart: (state, action: PayloadAction<number>) => {
      const updatedCart = state.products.filter(product => product.id !== action.payload);
      state.products = updatedCart;
    },
  },
});

export const { setAddToCart, setRemoveFromCart, setDeleteFromCart } = cartSlice.actions;
export const selectCart = (state: RootState): CartState => state.cart;
export default cartSlice.reducer;
