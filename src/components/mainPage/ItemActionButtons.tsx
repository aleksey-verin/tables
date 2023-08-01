import { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deleteTableItem } from '../../store/reducers/tableDataSlice';

interface ItemActionButtonsProps {
  id: number;
}

const ItemActionButtons: FC<ItemActionButtonsProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleAdd = (itemId: number) => {
    console.log(itemId);
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch(deleteTableItem(itemId));
  };

  return (
    <Space size={10}>
      <Button onClick={() => handleAdd(id)} type="dashed" icon={<EditOutlined />}>
        Edit
      </Button>
      <Button onClick={() => handleDeleteItem(id)} danger type="dashed" icon={<DeleteOutlined />}>
        Delete
      </Button>
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
