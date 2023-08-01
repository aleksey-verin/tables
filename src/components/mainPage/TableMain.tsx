import Table, { ColumnsType, TableProps } from 'antd/es/table';
import { FC } from 'react';
import { TableDataType } from '../../store/reducers/types';
import { getViewedDate } from '../../utils/helpers';
import ItemActionButtons from './ItemActionButtons';
import { useSelector } from 'react-redux';
import { selectorTableDataSlice } from '../../store/reducers/tableDataSlice';

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
    render: (id: number) => <ItemActionButtons id={id} />,
    width: '200px'
  }
];

const onChange: TableProps<TableDataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

interface TableMainProps {}

const TableMain: FC<TableMainProps> = ({}) => {
  const { tableData } = useSelector(selectorTableDataSlice);

  return <Table pagination={false} columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default TableMain;
