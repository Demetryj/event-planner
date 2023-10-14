import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'page',
  initialState: { currentPage: 1 },
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
