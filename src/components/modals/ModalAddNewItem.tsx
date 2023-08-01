import { Modal } from 'antd';
import { FC } from 'react';
import FormAddNewItem from '../mainPage/FormAddNewItem';

interface ModalAddNewItemProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ModalAddNewItem: FC<ModalAddNewItemProps> = ({ open, onOk, onCancel }) => {
  return (
    <Modal
      open={open}
      title="Add New Item"
      onOk={onOk}
      onCancel={onCancel}
      footer={false}
      destroyOnClose={true}>
      <FormAddNewItem onCancel={onCancel} />
    </Modal>
  );
};

export default ModalAddNewItem;
