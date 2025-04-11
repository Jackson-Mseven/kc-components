import { Form, FormProps } from 'antd';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { RENDER_MAP } from './constants';
import FormPropsStateContext from './providers/FormPropsState';

const JsonSchemaFormItem = ({ $type, formItemProps, ...componentProps }) => {
  const { formPropsState, setFormPropsState } = useContext(
    FormPropsStateContext,
  );

  const customOnChange = (
    value: any,
    [formProps, setFormProps]: [FormProps, Dispatch<SetStateAction<FormProps>>],
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
};

export default JsonSchemaFormItem;
