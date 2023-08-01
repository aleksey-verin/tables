import { Button, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { FC } from 'react';

const TableTitle: FC = () => {
  return (
    <Space style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 10 }}>
      <Button type="primary" size="large" icon={<PlusCircleOutlined />}>
        Add New Item
      </Button>
    </Space>
  );
};

export default TableTitle;
