import { createElement } from 'react';
import { CustomJsonSchemaFormItem } from '../../type';

const JsonSchemaCustom = ({
  customRender,
  ...props
}: Omit<CustomJsonSchemaFormItem, '$type' | 'formItemProps'>) => {
  return createElement(customRender, props);
};

export default JsonSchemaCustom;
