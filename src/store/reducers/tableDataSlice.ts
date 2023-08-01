import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';
import { storage, storageGetItem } from '../../utils/storage';
import { initialTableData } from '../../assets/initialTableData';
import { TableDataType } from './types';

interface initialStateTypes {
  tableData: TableDataType[];
}

const initialState = {
  tableData: storageGetItem(storage.tableData) || initialTableData
};

export const tableDataSlice = createSlice({
  name: 'tableDataSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    addTableItem: (state, { payload }: PayloadAction<TableDataType>) => {
      state.tableData.push(payload);
    },
    editTableItem: (state, { payload }: PayloadAction<TableDataType>) => {
      state.tableData = state.tableData.map((tableItem) =>
        tableItem.id === payload.id ? payload : tableItem
      );
    },
    deleteTableItem: (state, { payload }: PayloadAction<number>) => {
      state.tableData = state.tableData.filter((tableItem) => tableItem.id !== payload);
    }
  }
});

export const selectorTableDataSlice = (state: IRootState) => state.tableDataSlice;
export const { addTableItem, editTableItem, deleteTableItem } = tableDataSlice.actions;
export default tableDataSlice.reducer;
