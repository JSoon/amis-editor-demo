import {registerEditorPlugin, BasePlugin} from 'amis-editor';
import {
  RendererEventContext,
  SubRendererInfo,
  BasicSubRenderInfo,
  PluginInterface
} from 'amis-editor';

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
  'my-my',
  'my-renderer',
  'form',
  'input-text',
  'textarea',
  'input-rich-text',
  'input-number',
  'radios',
  'checkboxes',
  'select',
  'input-date',
  'input-date-range',
  'input-file',
  'input-image'
];

// 获取 hash 中的 query string
function getUrlHashQuery(name: string) {
  // 获取 hash 部分
  const hash = window.location.hash;
  // 检查 hash 中是否包含 query string
  const hashIndex = hash.indexOf('?');
  if (hashIndex !== -1) {
    // 提取 query string
    const queryString = hash.substring(hashIndex + 1);
    // 使用 URLSearchParams 解析 query string
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name);
  } else {
    return '';
  }
}

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
          r.disabledRendererPlugin = true;
        } else {
          r.disabledRendererPlugin = false;
        }
      }
    });
  }
}

registerEditorPlugin(ManagerEditorPlugin);
