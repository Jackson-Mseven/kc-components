import {
  AutoCompleteProps,
  CascaderProps,
  ColorPickerProps,
  DatePickerProps,
  DraggerProps,
  FormItemProps,
  FormProps,
  InputNumberProps,
  InputProps,
  MentionsProps,
  RadioGroupProps,
  RateProps,
  SegmentedProps,
  SelectProps,
  SwitchProps,
  TimePickerProps,
  TreeSelectProps,
  UploadProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { RangePickerProps } from 'antd/es/date-picker';
import { PasswordProps, SearchProps, TextAreaProps } from 'antd/es/input';
import { OTPProps } from 'antd/es/input/OTP';
import { SliderProps } from 'antd/es/slider';
import { Dispatch, SetStateAction } from 'react';

export type JsonSchemaFormItemTypeType =
  // input
  | 'input'
  | 'password'
  | 'search'
  | 'textarea'
  | 'opt'
  | 'inputNumber'
  | 'mentions'
  | 'autoComplete'
  // select
  | 'select'
  | 'treeSelect'
  | 'cascader'
  // check
  | 'radio'
  | 'slider'
  | 'checkbox'
  | 'segmented'
  | 'switch'
  // picker
  | 'rate'
  | 'datePicker'
  | 'rangePicker'
  | 'timePicker'
  | 'colorPicker'
  // upload
  | 'upload'
  | 'dragger'
  // custom
  | 'custom'
  // nest
  | 'nest';

export type filterCustomProps<T> = Omit<T, 'onChange'>;

// 基础接口，包含所有表单项共有的属性
interface BaseJsonSchemaFormItem {
  formItemProps: FormItemProps;
  onChange?: (
    value: any,
    [formProps, setFormProps]: [FormProps, Dispatch<SetStateAction<FormProps>>],
  ) => void;
}

interface InputJsonSchemaFormItem
  extends filterCustomProps<InputProps>,
    BaseJsonSchemaFormItem {
  $type: 'input';
}

interface InputPasswordJsonSchemaFormItem
  extends filterCustomProps<PasswordProps>,
    BaseJsonSchemaFormItem {
  $type: 'password';
}

interface InputNumberJsonSchemaFormItem
  extends filterCustomProps<InputNumberProps>,
    BaseJsonSchemaFormItem {
  $type: 'inputNumber';
}

interface TextareaJsonSchemaFormItem
  extends filterCustomProps<TextAreaProps>,
    BaseJsonSchemaFormItem {
  $type: 'textarea';
}

interface SearchJsonSchemaFormItem
  extends filterCustomProps<SearchProps>,
    BaseJsonSchemaFormItem {
  $type: 'search';
}

export interface AutoCompleteJsonSchemaFormItem
  extends Omit<filterCustomProps<AutoCompleteProps>, 'onSearch'>,
    BaseJsonSchemaFormItem {
  $type: 'autoComplete';
  onSearch?: (
    value: string,
    [options, setOptions]: [
      AutoCompleteProps['options'],
      Dispatch<SetStateAction<AutoCompleteProps['options']>>,
    ],
  ) => void;
}

interface SelectJsonSchemaFormItem
  extends filterCustomProps<SelectProps>,
    BaseJsonSchemaFormItem {
  $type: 'select';
}

interface TreeSelectJsonSchemaFormItem
  extends filterCustomProps<TreeSelectProps>,
    BaseJsonSchemaFormItem {
  $type: 'treeSelect';
}

interface OptJsonSchemaFormItem
  extends filterCustomProps<OTPProps>,
    BaseJsonSchemaFormItem {
  $type: 'opt';
}

interface RadioJsonSchemaFormItem
  extends filterCustomProps<RadioGroupProps>,
    BaseJsonSchemaFormItem {
  $type: 'radio';
}

interface CheckboxJsonSchemaFormItem
  extends filterCustomProps<CheckboxGroupProps>,
    BaseJsonSchemaFormItem {
  $type: 'checkbox';
}

interface CascaderJsonSchemaFormItem
  extends filterCustomProps<CascaderProps>,
    BaseJsonSchemaFormItem {
  $type: 'cascader';
}

interface SegmentedJsonSchemaFormItem
  extends filterCustomProps<SegmentedProps>,
    BaseJsonSchemaFormItem {
  $type: 'segmented';
}

interface DatePickerJsonSchemaFormItem
  extends filterCustomProps<DatePickerProps>,
    BaseJsonSchemaFormItem {
  $type: 'datePicker';
}

interface RangePickerJsonSchemaFormItem
  extends filterCustomProps<RangePickerProps>,
    BaseJsonSchemaFormItem {
  $type: 'rangePicker';
}

interface TimePickerJsonSchemaFormItem
  extends filterCustomProps<TimePickerProps>,
    BaseJsonSchemaFormItem {
  $type: 'timePicker';
}

interface ColorPickerJsonSchemaFormItem
  extends filterCustomProps<ColorPickerProps>,
    BaseJsonSchemaFormItem {
  $type: 'colorPicker';
}

interface MentionsJsonSchemaFormItem
  extends filterCustomProps<MentionsProps>,
    BaseJsonSchemaFormItem {
  $type: 'mentions';
}

interface RateJsonSchemaFormItem
  extends filterCustomProps<RateProps>,
    BaseJsonSchemaFormItem {
  $type: 'rate';
}

interface SliderJsonSchemaFormItem
  extends filterCustomProps<SliderProps>,
    BaseJsonSchemaFormItem {
  $type: 'slider';
}

interface SwitchJsonSchemaFormItem
  extends filterCustomProps<SwitchProps>,
    BaseJsonSchemaFormItem {
  $type: 'switch';
}

interface UploadJsonSchemaFormItem
  extends filterCustomProps<UploadProps>,
    BaseJsonSchemaFormItem {
  $type: 'upload';
}

interface DraggerJsonSchemaFormItem
  extends filterCustomProps<DraggerProps>,
    BaseJsonSchemaFormItem {
  $type: 'dragger';
}

interface CustomJsonSchemaFormItemProps {
  id?: string;
  value?: any;
  onChange?: (value: any) => void;
}

type customRenderType = (
  props: CustomJsonSchemaFormItemProps,
) => React.ReactNode;

export interface CustomJsonSchemaFormItem
  extends Omit<BaseJsonSchemaFormItem, 'onChange'>,
    CustomJsonSchemaFormItemProps {
  $type: 'custom';
  customRender: customRenderType;
}

export interface NestedJsonSchemaFormItem
  extends Omit<BaseJsonSchemaFormItem, 'onChange'>,
    CustomJsonSchemaFormItemProps {
  $type: 'nest';
  nestedRender: JsonSchemaFormItemType[];
}

export type JsonSchemaFormItemType =
  // input
  | InputJsonSchemaFormItem
  | InputPasswordJsonSchemaFormItem
  | TextareaJsonSchemaFormItem
  | SearchJsonSchemaFormItem
  | OptJsonSchemaFormItem
  | InputNumberJsonSchemaFormItem
  | MentionsJsonSchemaFormItem
  | AutoCompleteJsonSchemaFormItem
  // select
  | SelectJsonSchemaFormItem
  | TreeSelectJsonSchemaFormItem
  | CascaderJsonSchemaFormItem
  // check
  | RadioJsonSchemaFormItem
  | CheckboxJsonSchemaFormItem
  | SegmentedJsonSchemaFormItem
  | RateJsonSchemaFormItem
  | SliderJsonSchemaFormItem
  | SwitchJsonSchemaFormItem
  // picker
  | DatePickerJsonSchemaFormItem
  | RangePickerJsonSchemaFormItem
  | TimePickerJsonSchemaFormItem
  | ColorPickerJsonSchemaFormItem
  // upload
  | UploadJsonSchemaFormItem
  | DraggerJsonSchemaFormItem
  // custom
  | CustomJsonSchemaFormItem
  // nest
  | NestedJsonSchemaFormItem;

type Submitter = boolean | ((doms: React.ReactNode[]) => React.ReactNode[]);

export interface JsonSchemaFormProps {
  schema: JsonSchemaFormItemType[];
  formProps?: FormProps;
  submitter?: Submitter;
}
