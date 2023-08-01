import { Modal } from 'antd';
import { FC, ReactNode } from 'react';

interface ModalProviderProps {
  open: boolean;
  hideModal: () => void;
  children: ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ open, hideModal, children }) => {
  return (
    <Modal
      open={open}
      title="Add New Item"
      onCancel={hideModal}
      footer={false}
      destroyOnClose={true}>
      {children}
    </Modal>
  );
};

export default ModalProvider;
