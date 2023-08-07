import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { search: '', category: '', sortBy: '' },
  reducers: {
    changeFilter(state, action) {
      state.search = action.payload;
    },
    chooseCategory(state, action) {
      state.category = action.payload;
    },
    sortByValue(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { changeFilter, chooseCategory, sortByValue } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
