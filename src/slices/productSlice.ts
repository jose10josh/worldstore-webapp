import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { RootState } from '../app/store';

interface ProductState {
  products: ProductModel[]
  filterProducts: ProductModel[]
}

const initialState:ProductState = {
  products: [],
  filterProducts: [],
};

export const productSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setProducts: (state, action:PayloadAction<ProductModel[]>) => {
      state.products = action.payload
      state.filterProducts = action.payload
    },
    setFavorite: (state, action:PayloadAction<ProductModel>) => {
      const currentIndex = state.products.findIndex((item) => {
        return item.id === action.payload.id
      })
      if(currentIndex >= 0) {
        const isFavorite = state.products[currentIndex].favorite;
        state.products[currentIndex].favorite =  !isFavorite;
        state.filterProducts[currentIndex].favorite =  !isFavorite;
      }
    },
    setSearched: (state, action:PayloadAction<string>) => {
      const filterdProd = state.products.filter(item => (
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      ))
      state.filterProducts = filterdProd
    },
  }
})


export const { setProducts, setFavorite, setSearched } = productSlice.actions;
export const selectProducts = (state: RootState) => state.data.products
export const selectFilterProducts = (state: RootState) => state.data.filterProducts
export default productSlice.reducer;