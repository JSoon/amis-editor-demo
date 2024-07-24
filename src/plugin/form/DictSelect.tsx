import {
  BaseEventContext,
  BasePlugin,
  BasicPanelItem,
  BuildPanelEventContext,
  getSchemaTpl,
  registerEditorPlugin
} from 'amis-editor';
import '../../renderer/form/DictSelect';

export default class DictSelectPlugin extends BasePlugin {
  // 这里要跟对应的渲染器名字对应上
  // 注册渲染器的时候会要求指定渲染器名字
  rendererName = 'dict-select';

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = '字典下拉框';
  description = '从字典数据获取下拉选项';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['表单项'];

  // 图标
  icon = 'fa fa-caret-square-down';

  // 用来生成预览图的
  previewSchema = {
    type: 'dict-select',
    name: '',
    dictType: 'sys_yes_no',
    switch: true
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: 'dict-select',
    name: '',
    dictType: '',
    switch: false
  };

  // 右侧面板相关
  panelTitle = '字典下拉框';
  panelBody = getSchemaTpl('tabs', [
    {
      title: '属性',
      body: [
        getSchemaTpl('formItemName', {
          type: 'input-text',
          name: 'name',
          label: '字段名',
          required: true
        }),
        getSchemaTpl('formItemName', {
          type: 'input-text',
          name: 'dictType',
          label: '字典类型',
          placeholder: '字典类型枚举值，如：sys_yes_no',
          required: true
        }),
        getSchemaTpl('formItemName', {
          type: 'switch',
          name: 'required',
          label: '必填'
        })
      ]
    }
  ]);
}

registerEditorPlugin(DictSelectPlugin);
