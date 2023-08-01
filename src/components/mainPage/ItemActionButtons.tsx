import { FC, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deleteTableItem } from '../../store/reducers/tableDataSlice';
import ModalEditItem from '../modals/ModalEditItem';

interface ItemActionButtonsProps {
  id: string;
}

const ItemActionButtons: FC<ItemActionButtonsProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  const handleDeleteItem = (itemId: string) => {
    dispatch(deleteTableItem(itemId));
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Space size={10}>
      <Button onClick={handleEdit} type="dashed" icon={<EditOutlined />}>
        Edit
      </Button>
      <Button onClick={() => handleDeleteItem(id)} danger type="dashed" icon={<DeleteOutlined />}>
        Delete
      </Button>
      <ModalEditItem open={open} onOk={handleOk} onCancel={handleCancel} id={id} />
    </Space>
    // {/* <button onClick={() => handleAdd(id)} type="button">
    //   Edit
    //   <DeleteOutlined />
    // </button>
    // <button type="button">
    //   <EditOutlined />
    //   Delete
    // </button> */}
  );
};

export default ItemActionButtons;
