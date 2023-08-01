import { FC } from 'react';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { initialTableData } from '../assets/initialTableData';
import { getViewedDate } from '../utils/helpers';
import Actions from './Actions';

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
  createdAt: number;
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
    dataIndex: 'createdAt',
    render: (date: number) => getViewedDate(date),
    sorter: {
      compare: (a, b) => a.createdAt - b.createdAt
    }
  },
  {
    title: 'Actions',
    dataIndex: 'key',
    render: (key: string) => <Actions id={key} />,
    width: '200px'
  }
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Table
        pagination={false}
        columns={columns}
        dataSource={initialTableData}
        onChange={onChange}
      />
    </ContainerContent>
  );
};

export default MainPage;
