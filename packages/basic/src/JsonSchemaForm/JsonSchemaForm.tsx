import { Button, Form, FormProps, Space } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { RENDER_MAP } from './constants';
import { JsonSchemaFormProps } from './type';

const JsonSchemaForm = ({ schema, formProps }: JsonSchemaFormProps) => {
  const [form] = Form.useForm();

  const [formPropsState, setFormPropsState] = useState<FormProps>(
    formProps ?? {},
  );

  return (
    <Form scrollToFirstError layout="vertical" {...formPropsState} form={form}>
      {schema.map((item) => {
        const { $type, formItemProps, ...componentProps } = item;

        const customOnChange = (
          value: any,
          [formProps, setFormProps]: [
            FormProps,
            Dispatch<SetStateAction<FormProps>>,
          ],
        ) => {
          componentProps?.onChange?.(value, [formProps, setFormProps]);
        };

        return (
          <Form.Item key={formItemProps.name} {...formItemProps}>
            {React.createElement(RENDER_MAP[$type], {
              ...componentProps,
              onChange: (value) =>
                customOnChange(value, [formPropsState, setFormPropsState]),
            })}
          </Form.Item>
        );
      })}
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default JsonSchemaForm;
