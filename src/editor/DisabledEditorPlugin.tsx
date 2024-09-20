import {registerEditorPlugin, BasePlugin} from 'amis-editor';
import {
  RendererEventContext,
  SubRendererInfo,
  BasicSubRenderInfo,
  PluginInterface
} from 'amis-editor';
import {getUrlHashQuery} from '../utils';

/**
 * 用于隐藏一些不需要的Editor组件
 * 备注: 如果不知道当前Editor中有哪些预置组件，可以在这里设置一个断点，console.log 看一下 renderers。
 */

// 需要在组件面板中隐藏的组件
const disabledRenderers = [
  'audio', // 音频
  'carousel', // 轮播图
  'custom', // 自定义代码
  'log', // 日志
  'sparkline' // 走势图
];

// 表单构建编辑器组件
const formRenderers = [
  'form',
  'input-text',
  'textarea',
  'input-rich-text',
  'input-number',
  'radios',
  'dict-radios',
  'checkbox',
  'checkboxes',
  'dict-checkboxes',
  'select',
  'dict-select',
  'switch',
  'input-date',
  'input-date-range',
  'input-file',
  'input-image'
];

export class ManagerEditorPlugin extends BasePlugin {
  order = 9999;

  buildSubRenderers(
    context: RendererEventContext,
    renderers: Array<SubRendererInfo>
  ): BasicSubRenderInfo | Array<BasicSubRenderInfo> | void {
    console.log('renderers', renderers);
    const editorType = getUrlHashQuery('editorType');
    // 根据编辑器类型，展示不同的组件
    renderers.forEach(r => {
      // 初始化
      r.disabledRendererPlugin = true;
      const pluginRendererName = r.rendererName as string;
      // 表单构建编辑器
      if (editorType === 'form') {
        if (formRenderers.includes(pluginRendererName)) {
          r.disabledRendererPlugin = false;
          // 将所有组件标识为系统组件，避免出现自定义组件页签影响体验
          r.isBaseComponent = true;
        }
      }
      // 默认根据 disabledRenderers 进行展示
      else {
        if (!disabledRenderers.includes(pluginRendererName)) {
          r.disabledRendererPlugin = false;
        } else {
          r.disabledRendererPlugin = true;
        }
      }
    });
  }
}

registerEditorPlugin(ManagerEditorPlugin);
