import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';

interface initialStateTypes {
  searchValue: string;
}

const initialState = {
  searchValue: ''
};

export const tableFiltersSlice = createSlice({
  name: 'tableFiltersSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    clearSearchValue: (state) => {
      state.searchValue = initialState.searchValue;
    }
  }
});

export const selectorTableFiltersSlice = (state: IRootState) => state.tableFiltersSlice;
export const { setSearchValue, clearSearchValue } = tableFiltersSlice.actions;
export default tableFiltersSlice.reducer;
