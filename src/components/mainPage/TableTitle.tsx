import { Button, Space } from 'antd';
import { PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import ModalAddNewItem from '../modals/ModalAddNewItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { resetTableData } from '../../store/reducers/tableDataSlice';

const TableTitle: FC = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleResetData = () => {
    dispatch(resetTableData());
  };

  return (
    <Space style={{ width: '100%', justifyContent: 'space-between', marginBottom: 20 }}>
      <Button onClick={handleResetData} type="dashed" size="large" icon={<RollbackOutlined />}>
        Return to initial data
      </Button>
      <Button onClick={showModal} type="primary" size="large" icon={<PlusCircleOutlined />}>
        Add New Item
      </Button>
      <ModalAddNewItem open={open} hideModal={hideModal} />
    </Space>
  );
};

export default TableTitle;
