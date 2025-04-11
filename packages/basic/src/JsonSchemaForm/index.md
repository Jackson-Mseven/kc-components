# JsonSchemaForm

## 基本用法

```tsx
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { JsonSchemaForm, JsonSchemaFormItemType } from '@kc-components/basic';

const schema: JsonSchemaFormItemType[] = [
  {
    $type: 'segmented',
    formItemProps: {
      label: '状态',
      name: 'status',
    },
    options: [
      {
        label: '启用',
        value: '1',
      },
      {
        label: '禁用',
        value: '0',
      },
    ],
    onChange(value, [, setFormProps]) {
      setFormProps((pre) => ({
        ...pre,
        disabled: value === '0',
      }));
    },
  },
  {
    $type: 'input',
    formItemProps: {
      label: '用户名',
      name: 'username',
      rules: [{ required: true, message: '用户名不能为空！' }],
    },
    placeholder: '请输入用户名',
  },
  {
    $type: 'password',
    formItemProps: {
      label: '密码',
      name: 'password',
      rules: [{ required: true, message: '密码不能为空！' }],
    },
    placeholder: '请输入密码',
  },
  {
    $type: 'search',
    formItemProps: {
      label: '搜索',
      name: 'search',
    },
    placeholder: '请输入',
  },
  {
    $type: 'textarea',
    formItemProps: {
      label: '反馈',
      name: 'feedback',
    },
    placeholder: '请输入反馈',
  },
  {
    $type: 'opt',
    formItemProps: {
      label: '验证码',
      name: 'opt',
    },
  },
  {
    $type: 'autoComplete',
    formItemProps: {
      label: '邮箱',
      name: 'autoComplete',
    },
    placeholder: '请输入',
    onSearch(value, [, setOptions]) {
      setOptions(
        ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
          label: `${value}@${domain}`,
          value: `${value}@${domain}`,
        })),
      );
    },
  },
  {
    $type: 'select',
    formItemProps: {
      label: '角色',
      name: 'role',
      rules: [{ required: true, message: '角色不能为空！' }],
    },
    placeholder: '请选择角色',
    allowClear: true,
    options: [
      {
        label: '管理员',
        value: 'master',
      },
      {
        label: '工程师',
        value: 'engineer',
      },
    ],
  },
  {
    $type: 'radio',
    formItemProps: {
      label: '性别',
      name: 'gender',
      rules: [{ required: true, message: '性别不能为空！' }],
    },
    options: [
      {
        label: '男',
        value: 'male',
      },
      {
        label: '女',
        value: 'female',
      },
    ],
  },
  {
    $type: 'treeSelect',
    formItemProps: {
      label: '部门',
      name: 'department',
    },
    placeholder: '请选择部门',
    treeData: [
      {
        label: '技术部',
        value: 'technology',
        children: [
          {
            label: '研发部',
            value: 'development',
          },
          {
            label: '测试部',
            value: 'test',
          },
        ],
      },
      {
        label: '人事部',
        value: 'humanResource',
      },
    ],
  },
  {
    $type: 'inputNumber',
    formItemProps: {
      label: '年龄',
      name: 'age',
    },
    placeholder: '请输入年龄',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    $type: 'checkbox',
    formItemProps: {
      label: '爱好',
      name: 'hobby',
    },
    options: [
      {
        label: '篮球',
        value: 'basketball',
      },
      {
        label: '足球',
        value: 'football',
      },
    ],
  },
  {
    $type: 'cascader',
    formItemProps: {
      label: '工位',
      name: 'workstation',
    },
    placeholder: '请选择工位',
    options: [
      {
        label: '一楼',
        value: 'floor-1',
        children: [
          {
            label: '101',
            value: '101',
          },
          {
            label: '102',
            value: '102',
          },
        ],
      },
      {
        label: '二楼',
        value: 'floor-2',
      },
    ],
  },
  {
    $type: 'datePicker',
    formItemProps: {
      label: '出生日期',
      name: 'birthday',
    },
    placeholder: '请选择出生日期',
  },
  {
    $type: 'rangePicker',
    formItemProps: {
      label: '工作时间',
      name: 'workTime',
    },
    placeholder: ['请选择开始时间', '请选择结束时间'],
  },
  {
    $type: 'timePicker',
    formItemProps: {
      label: '工作时长',
      name: 'workDuration',
    },
    placeholder: '请选择工作时长',
  },
  {
    $type: 'colorPicker',
    formItemProps: {
      label: '颜色',
      name: 'color',
    },
  },
  {
    $type: 'mentions',
    formItemProps: {
      label: '备注',
      name: 'remark',
    },
    placeholder: '请输入备注',
    options: [
      {
        label: '备注1',
        value: 'remark1',
      },
      {
        label: '备注2',
        value: 'remark2',
      },
    ],
  },
  {
    $type: 'rate',
    formItemProps: {
      label: '评分',
      name: 'rating',
    },
  },
  {
    $type: 'slider',
    formItemProps: {
      label: '分数',
      name: 'score',
    },
  },
  {
    $type: 'upload',
    formItemProps: {
      label: '上传图片',
      name: 'upload',
    },
    name: 'file',
    children: <Button icon={<UploadOutlined />}>Click to Upload</Button>,
  },
  {
    $type: 'dragger',
    formItemProps: {
      label: '拖拽上传文件',
      name: 'dragger',
    },
    children: (
      <>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </>
    ),
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

## 自定义组件

```tsx
import { Input } from 'antd';
import { JsonSchemaForm, JsonSchemaFormItemType } from '@kc-components/basic';

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
    $type: 'custom',
    formItemProps: {
      label: '密码',
      name: 'password',
    },
    placeholder: '请输入密码',
    customRender: (props) => {
      return (
        <>
          <Input.Password
            value={props.value}
            onChange={props.onChange}
            placeholder="请输入密码"
            defaultValue={props.value}
          />
          <div>密码是：{props.value}</div>
        </>
      );
    },
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

## 嵌套组件

```tsx
import { JsonSchemaForm, JsonSchemaFormItemType } from '@kc-components/basic';

const schema: JsonSchemaFormItemType[] = [
  {
    $type: 'nest',
    formItemProps: {
      label: '用户信息',
    },
    nestedRender: [
      {
        $type: 'input',
        formItemProps: {
          label: '姓名',
          name: 'name',
        },
        placeholder: '请输入姓名',
      },
      {
        $type: 'input',
        formItemProps: {
          label: '年龄',
          name: 'age',
        },
        placeholder: '请输入年龄',
      },
    ],
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
