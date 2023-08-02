import { FC, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deleteTableItem } from '../../store/reducers/tableDataSlice';
import ModalProvider from '../modals/ModalProvider';
import FormEditItem from '../modals/FormEditItem';

interface ItemActionButtonsProps {
  id: string;
}

const ItemActionButtons: FC<ItemActionButtonsProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  const handleDeleteItem = (itemId: string) => {
    dispatch(deleteTableItem(itemId));
  };

  return (
    <Space size={10}>
      <Button onClick={showModal} type="dashed" icon={<EditOutlined />}>
        Edit
      </Button>
      <Button onClick={() => handleDeleteItem(id)} danger type="dashed" icon={<DeleteOutlined />}>
        Delete
      </Button>
      <ModalProvider open={openModal} hideModal={hideModal} title="Edit Item">
        <FormEditItem onCancel={hideModal} id={id} />
      </ModalProvider>
    </Space>
  );
};

export default ItemActionButtons;
