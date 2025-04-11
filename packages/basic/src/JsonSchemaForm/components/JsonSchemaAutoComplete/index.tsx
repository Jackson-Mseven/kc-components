import { AutoComplete } from 'antd';
import { AutoCompleteProps } from 'antd/es/auto-complete';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { AutoCompleteJsonSchemaFormItem, filterCustomProps } from '../../type';

interface JsonSchemaAutoCompleteProps
  extends Omit<filterCustomProps<AutoCompleteProps>, 'onSearch'> {
  onSearch?: AutoCompleteJsonSchemaFormItem['onSearch'];
}

const JsonSchemaAutoComplete = (props: JsonSchemaAutoCompleteProps) => {
  const [options, setOptions] = useState(props.options);

  const customOnSearch = useCallback(
    (
      value: string,
      [options, setOptions]: [
        JsonSchemaAutoCompleteProps['options'],
        Dispatch<SetStateAction<JsonSchemaAutoCompleteProps['options']>>,
      ],
    ) => {
      props.onSearch?.(value, [options, setOptions]);
    },
    [props.onSearch],
  );

  return (
    <AutoComplete
      {...props}
      options={options}
      onSearch={(value) => customOnSearch(value, [options, setOptions])}
    />
  );
};

export default JsonSchemaAutoComplete;
