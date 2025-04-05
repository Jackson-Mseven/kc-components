import {
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Segmented,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect,
  Upload,
} from 'antd';
import type { ComponentType } from 'react';
import JsonSchemaAutoComplete from './JsonSchemaAutoComplete';
import JsonSchemaCustom from './JsonSchemaCustom';
import { JsonSchemaFormItemType } from './type';

export const RENDER_MAP: Record<JsonSchemaFormItemType, ComponentType<any>> = {
  // input
  input: Input,
  password: Input.Password,
  search: Input.Search,
  textarea: Input.TextArea,
  opt: Input.OTP,
  inputNumber: InputNumber,
  mentions: Mentions,
  autoComplete: JsonSchemaAutoComplete,
  // select
  select: Select,
  treeSelect: TreeSelect,
  cascader: Cascader,
  // check
  radio: Radio.Group,
  checkbox: Checkbox.Group,
  segmented: Segmented,
  rate: Rate,
  slider: Slider,
  switch: Switch,
  // picker
  datePicker: DatePicker,
  rangePicker: DatePicker.RangePicker,
  timePicker: TimePicker,
  colorPicker: ColorPicker,
  // upload
  upload: Upload,
  dragger: Upload.Dragger,
  // custom
  custom: JsonSchemaCustom,
};
