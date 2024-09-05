// 全局类型定义
export {};

// NOTE: 请确保不存在global.ts文件, 否则会产生命名冲突, 导致global.d.ts文件失效
// https://stackoverflow.com/a/59728984/2630689
declare global {
  interface Window {
    VITE_APP_BASE_API: string;
  }
}
