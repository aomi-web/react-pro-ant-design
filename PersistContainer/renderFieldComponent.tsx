import React from 'react';
import { Field } from './PersistContainer';
import {
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
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

export function renderSelect(props) {
  return (
    <ProFormSelect {...props}/>
  );
}

export function renderDigit(props) {
  return (
    <ProFormDigit {...props}/>
  );
}

export function renderFieldComponent({ type = 'text', ...props }: Field) {
  let element;
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
  }
  return element;
}