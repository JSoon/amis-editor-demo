import {
  BaseEventContext,
  BasePlugin,
  BasicPanelItem,
  BuildPanelEventContext,
  getSchemaTpl,
  registerEditorPlugin
} from 'amis-editor';
import '../../renderer/form/DictCheckboxes';

export default class DictCheckboxesPlugin extends BasePlugin {
  // 这里要跟对应的渲染器名字对应上
  // 注册渲染器的时候会要求指定渲染器名字
  rendererName = 'dict-checkboxes';

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = '字典复选框';
  description = '从字典数据获取选项';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['表单项'];

  // 图标
  icon = 'fa fa-check-square-o';

  // 用来生成预览图的
  previewSchema = {
    type: 'form',
    mode: 'horizontal',
    wrapWithPanel: false,
    body: [
      {
        type: 'checkboxes',
        name: 'checkboxes',
        label: '复选框',
        labelWidth: 60,
        size: 'sm',
        options: [
          {
            label: '字典选项A',
            value: '字典选项A'
          },
          {
            label: '字典选项B',
            value: '字典选项B'
          }
        ]
      }
    ]
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: 'dict-checkboxes',
    name: '',
    label: '复选框',
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
          type: 'input-text',
          name: 'label',
          label: '标题'
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

registerEditorPlugin(DictCheckboxesPlugin);
