import { createElement } from 'react';
import { CustomJsonSchemaFormItem } from '../type';

const JsonSchemaCustom = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  customRender,
  ...props
}: Omit<CustomJsonSchemaFormItem, '$type' | 'formItemProps'>) => {
  return createElement(customRender, props);
};

export default JsonSchemaCustom;
