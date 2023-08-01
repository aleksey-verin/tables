import { Button, Space } from 'antd';
import { PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { resetTableData } from '../../store/reducers/tableDataSlice';
import ModalProvider from '../modals/ModalProvider';
import FormAddNewItem from '../modals/FormAddNewItem';

const TableTitle: FC = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
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
      <ModalProvider open={openModal} hideModal={hideModal}>
        <FormAddNewItem onCancel={hideModal} />
      </ModalProvider>
    </Space>
  );
};

export default TableTitle;
