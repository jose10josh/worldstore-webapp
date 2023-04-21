import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface ProductState {
  loading: boolean,
  isDarkMode: boolean
}

const initialState:ProductState = {
  loading: false,
  isDarkMode: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action:PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setDarkMode: (state, action:PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    },
  }
})


export const { setLoading, setDarkMode } = uiSlice.actions;
export const selectLoading = (state: RootState) => state.ui.loading
export const selectIsDarkMode = (state: RootState) => state.ui.isDarkMode
export default uiSlice.reducer;