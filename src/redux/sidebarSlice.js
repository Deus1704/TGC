// src/redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSelection: 'Dashboard',
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCurrentSelection: (state, action) => {
      state.currentSelection = action.payload;
    },
  },
});

export const { setCurrentSelection } = sidebarSlice.actions;

export default sidebarSlice.reducer;
