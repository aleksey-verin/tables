import { Button, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import ModalAddNewItem from '../modals/ModalAddNewItem';

const TableTitle: FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Space style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 20 }}>
      <Button onClick={showModal} type="primary" size="large" icon={<PlusCircleOutlined />}>
        Add New Item
      </Button>
      <ModalAddNewItem open={open} onOk={handleOk} onCancel={handleCancel} />
    </Space>
  );
};

export default TableTitle;
