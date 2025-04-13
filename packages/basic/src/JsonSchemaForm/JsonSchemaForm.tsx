import { Button, Form, FormProps, Space } from 'antd';
import { useMemo, useState } from 'react';
import JsonSchemaFormItem from './JsonSchemaFormItem';
import FormPropsStateContext from './providers/FormPropsState';
import { JsonSchemaFormProps } from './type';
const JsonSchemaForm = ({
  schema,
  formProps,
  submitter = true,
}: JsonSchemaFormProps) => {
  const [form] = Form.useForm();

  const [formPropsState, setFormPropsState] = useState<FormProps<any>>(
    formProps ?? {},
  );

  const defaultSubmitterDoms = useMemo(() => {
    return [
      <Button type="primary" htmlType="submit">
        提交
      </Button>,
      <Button onClick={() => form.resetFields()}>重置</Button>,
    ];
  }, []);

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
            {typeof submitter === 'function'
              ? submitter(defaultSubmitterDoms)
              : submitter && defaultSubmitterDoms}
          </Space>
        </Form.Item>
      </Form>
    </FormPropsStateContext.Provider>
  );
};

export default JsonSchemaForm;
