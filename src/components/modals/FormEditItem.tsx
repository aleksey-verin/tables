import { FC, useMemo, useRef } from 'react';
import { Input, Button, Form, DatePicker, InputNumber, FormInstance } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { editTableItem, selectorTableDataSlice } from '../../store/reducers/tableDataSlice';
import { FormFieldType } from '../../store/reducers/types/tableTypes';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

interface FormEditItemProps {
  onCancel: () => void;
  id: string;
}

const FormEditItem: FC<FormEditItemProps> = ({ onCancel, id }) => {
  const dispatch = useAppDispatch();
  const formRef = useRef<FormInstance>(null);

  const { tableData } = useSelector(selectorTableDataSlice);
  const itemForEditing = useMemo(() => {
    return tableData.find((item) => item.id === id);
  }, [id, tableData]);

  const resetForm = () => {
    formRef.current?.resetFields();
  };

  const onFinish = (values: FormFieldType) => {
    if (itemForEditing) {
      dispatch(
        editTableItem({
          ...values,
          id: itemForEditing.id,
          key: itemForEditing.key,
          createdAt: dayjs(values.createdAt).unix()
        })
      );
    }
    resetForm();
    onCancel();
    toast.success('Successfully edited!');
  };

  const onFinishFailed = () => {
    toast.error('Please fill in all required fields');
  };

  return (
    <Form
      name="editItem"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: 10 }}
      initialValues={{
        name: itemForEditing?.name,
        age: itemForEditing?.age,
        address: itemForEditing?.address,
        createdAt: itemForEditing ? dayjs.unix(itemForEditing?.createdAt) : null
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      ref={formRef}>
      <Form.Item<FormFieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item<FormFieldType>
        label="Age"
        name="age"
        rules={[{ required: true, message: 'Please input age!' }]}>
        <InputNumber style={{ width: '100%' }} min={1} max={150} />
      </Form.Item>
      <Form.Item<FormFieldType>
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input address!' }]}>
        <Input />
      </Form.Item>
      <Form.Item<FormFieldType>
        label="Created At"
        name="createdAt"
        rules={[{ required: true, message: 'Please input date!' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ marginRight: 10 }} type="primary" htmlType="submit">
          Apply changes
        </Button>
        <Button onClick={onCancel} type={'default'} htmlType="button">
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormEditItem;

{
  /* <Button key="back" onClick={onCancel}>
Return
</Button>,
<Button htmlType="submit" key="submit" type="primary" onClick={onOk}>
Add new item
</Button> */
}
