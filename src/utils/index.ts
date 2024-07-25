// 工具函数

// 获取 hash 中的 query string
export function getUrlHashQuery(name: string) {
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
