import { FC } from 'react';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { tableData } from '../assets/tableData';
import dayjs from 'dayjs';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Tables'
  }
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  createdAt: string;
}

const columns: ColumnsType<DataType> = [
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
    dataIndex: 'createdAt'
    // onCell: (record,) => {
    //   dayjs(record, 'YYYY-MM-DD')
    // },
    // render: (date) => <div>{dayjs(date, 'YYYY-MM-DD')}</div>
    // sorter: {
    //   compare: (a, b) => a.createdAt.localeCompare(b.createdAt)
    // }
  }
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Table columns={columns} dataSource={tableData} onChange={onChange} />
    </ContainerContent>
  );
};

export default MainPage;
