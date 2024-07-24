import React from 'react';
import {FormField, Renderer, RendererProps, Select} from 'amis';

export interface DictSelectProps extends RendererProps {
  // 表单字段名
  name: string;
}
@Renderer({
  type: 'dict-select',
  name: 'dict-select'
})
export default class DictSelectRenderer extends React.Component<DictSelectProps> {
  render() {
    const {formMode, formLabelAlign, name, required} = this.props;
    console.log(this.props);

    return (
      <FormField
        name={name}
        type="select"
        label="下拉框"
        labelAlign={formLabelAlign}
        mode={formMode}
        isRequired={required}
      >
        <Select className="w-full" options={[]} />
      </FormField>
    );
  }
}
