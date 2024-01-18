import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';

const initialState = {
  sidebar: {
    currentSelection: 'Dashboard',
  },
};

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
  preloadedState: initialState,
});
