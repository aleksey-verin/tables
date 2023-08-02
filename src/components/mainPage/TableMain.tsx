import Table, { ColumnsType } from 'antd/es/table';
import { FC, useMemo } from 'react';
import { TableDataType } from '../../store/reducers/types/tableTypes';
import { getViewedDate } from '../../utils/helpers';
import ItemActionButtons from './ItemActionButtons';
import { useSelector } from 'react-redux';
import { selectorTableDataSlice } from '../../store/reducers/tableDataSlice';
import { selectorTableFiltersSlice } from '../../store/reducers/tableFiltersSlice';

const columns: ColumnsType<TableDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name)
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: {
      compare: (a, b) => a.age - b.age
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: {
      compare: (a, b) => a.address.localeCompare(b.address)
    }
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    render: (date: number) => getViewedDate(date),
    sorter: {
      compare: (a, b) => a.createdAt - b.createdAt
    }
  },
  {
    title: 'Actions',
    dataIndex: 'id',
    render: (id: string) => <ItemActionButtons id={id} />,
    width: '200px'
  }
];

interface TableMainProps {}

const TableMain: FC<TableMainProps> = () => {
  const { tableData } = useSelector(selectorTableDataSlice);
  const { searchValue } = useSelector(selectorTableFiltersSlice);

  const filteredData = useMemo(() => {
    return tableData.filter(
      (tableItem) =>
        tableItem.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        tableItem.address.toLowerCase().includes(searchValue.toLowerCase()) ||
        tableItem.age.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
        getViewedDate(tableItem.createdAt)?.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [tableData, searchValue]);

  return <Table pagination={false} columns={columns} dataSource={filteredData} />;
};

export default TableMain;
