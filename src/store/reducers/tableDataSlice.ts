import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';
import { storage, storageGetItem } from '../../utils/storage';
import { initialTableData } from '../../assets/initialTableData';
import { FormFieldType, TableDataType } from './types/tableTypes';
import { v4 as uuidv4 } from 'uuid';

interface initialStateTypes {
  tableData: TableDataType[];
}

const initialState = {
  tableData: storageGetItem(storage.tableData) ?? initialTableData
};

export const tableDataSlice = createSlice({
  name: 'tableDataSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    addTableItem: (state, { payload }: PayloadAction<FormFieldType>) => {
      const id = uuidv4();
      state.tableData.push({ ...payload, key: id, id: id });
    },
    editTableItem: (state, { payload }: PayloadAction<TableDataType>) => {
      state.tableData = state.tableData.map((tableItem) =>
        tableItem.id === payload.id ? payload : tableItem
      );
    },
    deleteTableItem: (state, { payload }: PayloadAction<string>) => {
      state.tableData = state.tableData.filter((tableItem) => tableItem.id !== payload);
    },
    resetTableData: (state) => {
      state.tableData = initialTableData;
    }
  }
});

export const selectorTableDataSlice = (state: IRootState) => state.tableDataSlice;
export const { addTableItem, editTableItem, deleteTableItem, resetTableData } =
  tableDataSlice.actions;
export default tableDataSlice.reducer;
