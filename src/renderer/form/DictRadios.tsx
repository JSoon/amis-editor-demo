import React from 'react';
import {Renderer, RendererProps} from 'amis';
import {FormField} from 'amis-ui';

export interface DictRadiosProps extends RendererProps {
  // 字段名
  name: string;
  // 字典类型
  dictType: string;
  // 标题
  label?: string;
  // 是否必填
  required?: boolean;
}
@Renderer({
  type: 'dict-radios',
  name: 'dict-radios'
})
export default class DictRadiosRenderer extends React.Component<DictRadiosProps> {
  render() {
    const {formMode, formLabelAlign, name, label, dictType, required} =
      this.props;
    return (
      <FormField
        name={name}
        label={label}
        labelAlign={formLabelAlign}
        mode={formMode}
        isRequired={required}
      >
        <div
          className={`cxd-Form-control cxd-Form-static ${
            !dictType && 'text-red-500'
          }`}
        >
          {dictType || '请输入字典类型'}
        </div>
      </FormField>
    );
  }
}
