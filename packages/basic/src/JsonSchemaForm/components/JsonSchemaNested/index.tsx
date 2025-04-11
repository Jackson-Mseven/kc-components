import JsonSchemaFormItem from '../../JsonSchemaFormItem';
import { NestedJsonSchemaFormItem } from '../../type';

const JsonSchemaNested = ({
  nestedRender,
}: Omit<NestedJsonSchemaFormItem, '$type' | 'formItemProps'>) => {
  return nestedRender.map((props) => (
    <JsonSchemaFormItem key={props.formItemProps.name} {...props} />
  ));
};

export default JsonSchemaNested;
