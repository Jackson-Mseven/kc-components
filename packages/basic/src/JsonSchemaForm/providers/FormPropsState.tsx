import { FormProps } from 'antd';
import { createContext, Dispatch, SetStateAction } from 'react';

interface FormPropsStateContextType {
  formPropsState: FormProps<any>;
  setFormPropsState: Dispatch<SetStateAction<FormProps<any>>>;
}

const FormPropsStateContext = createContext<FormPropsStateContextType>({
  formPropsState: {},
  setFormPropsState: () => {},
});

export default FormPropsStateContext;
