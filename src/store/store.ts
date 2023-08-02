import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './reducers/themeSlice';
import tableDataSlice from './reducers/tableDataSlice';
import tableFiltersSlice from './reducers/tableFiltersSlice';
import { storage, storageSetItem } from '../utils/storage';

export const rootReducer = combineReducers({
  themeSlice,
  tableDataSlice,
  tableFiltersSlice
});

export const store = configureStore({
  reducer: rootReducer
});

store.subscribe(() => {
  storageSetItem(storage.theme, store.getState().themeSlice.isThemeLight);
  storageSetItem(storage.tableData, store.getState().tableDataSlice.tableData);
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
