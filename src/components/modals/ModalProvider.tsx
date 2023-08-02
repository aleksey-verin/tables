import { Modal } from 'antd';
import { FC, ReactNode } from 'react';

interface ModalProviderProps {
  open: boolean;
  hideModal: () => void;
  title: string;
  children: ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ open, hideModal, title, children }) => {
  return (
    <Modal open={open} title={title} onCancel={hideModal} footer={false} destroyOnClose={true}>
      {children}
    </Modal>
  );
};

export default ModalProvider;
