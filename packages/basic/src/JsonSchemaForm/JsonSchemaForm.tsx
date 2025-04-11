import { Button, Form, FormProps, Space } from 'antd';
import { useState } from 'react';
import JsonSchemaFormItem from './JsonSchemaFormItem';
import FormPropsStateContext from './providers/FormPropsState';
import { JsonSchemaFormProps } from './type';

const JsonSchemaForm = ({ schema, formProps }: JsonSchemaFormProps) => {
  const [form] = Form.useForm();

  const [formPropsState, setFormPropsState] = useState<FormProps<any>>(
    formProps ?? {},
  );

  return (
    <FormPropsStateContext.Provider
      value={{ formPropsState, setFormPropsState }}
    >
      <Form
        scrollToFirstError
        layout="vertical"
        {...formPropsState}
        form={form}
      >
        {schema.map((item) => (
          <JsonSchemaFormItem key={item.formItemProps.name} {...item} />
        ))}
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button onClick={() => form.resetFields()}>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </FormPropsStateContext.Provider>
  );
};

export default JsonSchemaForm;
