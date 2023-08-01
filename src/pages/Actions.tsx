import { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

interface ActionsProps {
  id: string;
}

const Actions: FC<ActionsProps> = ({ id }) => {
  const handleAdd = (itemId: string) => {
    console.log(itemId);
  };

  return (
    <Space size={10}>
      <Button onClick={() => handleAdd(id)} type="dashed" icon={<EditOutlined />}>
        Edit
      </Button>
      <Button danger type="dashed" icon={<DeleteOutlined />}>
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

export default Actions;
