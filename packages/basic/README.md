# @kc-components/basic

## Usage

```

import { Input } from 'antd';
import { JsonSchemaForm } from '@kc-components/basic';
import { JsonSchemaFormItemType } from '@kc-components/basic/JsonSchemaForm/type';

const schema: JsonSchemaFormItemType[] = [
  {
    $type: 'input',
    formItemProps: {
      label: '用户名',
      name: 'username',
    },
    placeholder: '请输入用户名',
  },
  {
    $type: 'password',
    formItemProps: {
      label: '密码',
      name: 'password',
    },
    placeholder: '请输入用户名',
  },
];

export default () => {
  return (
    <JsonSchemaForm
      schema={schema}
      formProps={{
        onFinish(values) {
          console.log('values---', values);
        },
      }}
    />
  );
};
```
