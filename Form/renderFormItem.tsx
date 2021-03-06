import React, { ReactNode } from 'react';
import { Field } from '../PersistContainer';
import {
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit, ProFormMoney,
  ProFormRadio,
  ProFormRate,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormTimePicker,
  ProFormUploadButton,
  ProFormUploadDragger
} from '@ant-design/pro-form';
import { ProFormAutoComplete } from './ProFormAutoComplete';
import { createProFormField } from './createProFormField';
import { ProFormCascader } from './ProFormCascader';
import { ProFormInputFeeRate } from './ProFormInputFeeRate';
import { ProFormTransfer } from './ProFormTransfer';
import { ProFormInputNumber } from './ProFormInputNumber';

export function renderText(props) {
  return (
    <ProFormText {...props}/>
  );
}

export function renderPassword(props) {
  return (
    <ProFormText.Password {...props}/>
  );
}

export function renderCaptcha(props) {
  return (
    <ProFormCaptcha {...props}/>
  );
}

export function renderDatePicker(props) {
  return (
    <ProFormDatePicker {...props}/>
  );
}

export function renderDateTimePicker(props) {
  return (
    <ProFormDateTimePicker {...props}/>
  );
}

export function renderDateRangePicker(props) {
  return (
    <ProFormDateRangePicker {...props}/>
  );
}

export function renderDateTimeRangePicker(props) {
  return (
    <ProFormDateTimeRangePicker {...props}/>
  );
}

export function renderTimePicker(props) {
  return (
    <ProFormTimePicker {...props}/>
  );
}

export function renderTimeRangePicker(props) {
  return (
    <ProFormTimePicker.RangePicker {...props}/>
  );
}

export function renderTextArea(props) {
  return (
    <ProFormTextArea {...props}/>
  );
}

export function renderCheckbox(props) {
  return (
    <ProFormCheckbox {...props}/>
  );
}

export function renderRadioGroup(props) {
  return (
    <ProFormRadio.Group {...props}/>
  );
}

export function renderSwitch(props) {
  return (
    <ProFormSwitch {...props}/>
  );
}

export function renderRate(props) {
  return (
    <ProFormRate {...props}/>
  );
}

export function renderSlider(props) {
  return (
    <ProFormSlider {...props}/>
  );
}

export function renderUploadDragger(props) {
  return (
    <ProFormUploadDragger {...props}/>
  );
}

export function renderUploadButton(props) {
  return (
    <ProFormUploadButton {...props}/>
  );
}

/**
 * ?????? select
 * @param options select option ????????????????????????key?????? option value?????????value??????option label
 * @param props
 */
export function renderSelect({ fieldProps = {}, ...props }: any) {
  const newFieldProps = {
    ...fieldProps
  };

  return (
    <ProFormSelect fieldProps={newFieldProps} {...props}/>
  );
}

export function renderDigit(props) {
  return (
    <ProFormDigit {...props}/>
  );
}

export function renderMoney(props) {
  return (
    <ProFormMoney {...props}/>
  );
}

export function renderAutoComplete({ fieldProps = {}, ...props }: any) {
  const newFieldProps = {
    ...fieldProps
  };

  return (
    <ProFormAutoComplete {...props} fieldProps={newFieldProps}/>
  );
}

export function renderCascader({ fieldProps = {}, ...props }: any) {
  const newFieldProps = {
    ...fieldProps
  };

  return (
    <ProFormCascader {...props} fieldProps={newFieldProps}/>
  );
}

export function renderFeeRate({ fieldProps = {}, ...props }: any) {
  const newFieldProps = {
    ...fieldProps
  };

  return (
    <ProFormInputFeeRate {...props} fieldProps={newFieldProps}/>
  );
}

export function renderTransfer(props) {
  return (
    <ProFormTransfer {...props}/>
  );
}

export function renderInputNumber(props) {
  return (
    <ProFormInputNumber {...props}/>
  );
}

export function renderFormItem({ type = 'text', render, ...props }: Field) {
  let element: ReactNode = undefined;
  if (render) {
    const ProFormCustom = createProFormField<any>({ render });
    return (
      <ProFormCustom {...props}/>
    );
  }
  switch (type) {
    case 'text':
      element = renderText(props);
      break;
    case 'password':
      element = renderPassword(props);
      break;
    case 'captcha':
      element = renderCaptcha(props);
      break;
    case 'datePicker':
      element = renderDatePicker(props);
      break;
    case 'dateTimePicker':
      element = renderDateTimePicker(props);
      break;
    case 'dateRangePicker':
      element = renderDateRangePicker(props);
      break;
    case 'dateTimeRangePicker':
      element = renderDateTimeRangePicker(props);
      break;
    case 'timePicker':
      element = renderTimePicker(props);
      break;
    case 'timeRangePicker':
      element = renderTimeRangePicker(props);
      break;
    case 'textArea':
      element = renderTextArea(props);
      break;
    case 'checkbox':
      element = renderCheckbox(props);
      break;
    case 'radioGroup':
      element = renderRadioGroup(props);
      break;
    case 'switch':
      element = renderSwitch(props);
      break;
    case 'rate':
      element = renderRate(props);
      break;
    case 'slider':
      element = renderSlider(props);
      break;
    case 'uploadDragger':
      element = renderUploadDragger(props);
      break;
    case 'uploadButton':
      element = renderUploadButton(props);
      break;
    case 'select':
      element = renderSelect(props);
      break;
    case 'digit':
      element = renderDigit(props);
      break;
    case 'money':
      element = renderMoney(props);
      break;
    case 'autoComplete':
      element = renderAutoComplete(props);
      break;
    case 'cascader':
      element = renderCascader(props);
      break;
    case 'feeRate':
      element = renderFeeRate(props);
      break;
    case 'transfer':
      element = renderTransfer(props);
      break;
    case 'number':
      element = renderInputNumber(props);
      break;
  }
  return element;
}
