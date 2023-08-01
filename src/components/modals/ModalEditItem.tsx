import { Modal } from 'antd';
import { FC } from 'react';
import FormEditItem from '../mainPage/FormEditItem';

interface ModalEditItemProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  id: string;
}

const ModalEditItem: FC<ModalEditItemProps> = ({ open, onOk, onCancel, id }) => {
  return (
    <Modal
      open={open}
      title="Edit Item"
      onOk={onOk}
      onCancel={onCancel}
      footer={false}
      destroyOnClose={true}>
      <FormEditItem id={id} onCancel={onCancel} />
    </Modal>
  );
};

export default ModalEditItem;
