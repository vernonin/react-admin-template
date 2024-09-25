
/**
 * 颜色设置透明度
 * @param {string} hexColor 颜色
 * @param {number} alpha    透明度
 */
export function colorWithAlpha(hexColor, alpha) {
  // 验证输入的颜色值是否为有效的十六进制颜色
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexColor)) {
    throw new Error('颜色值无效。请使用3位或6位十六进制颜色代码。');
  }

  // 如果颜色值是三位数，则将其转换为六位数
  const color = hexColor.length === 4 ? hexColor.replace(/[^0-9A-F]/gi, "$1") : hexColor;

  // 将十六进制颜色转换为RGB
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  // 确保透明度值在0到1之间
  alpha = Math.max(0, Math.min(1, alpha));

  // 将RGB值转换为RGBA字符串
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * 格式化价格
 * @param {number} value 
 */
export function formatPrice(value) {
  return `${value}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`);
}
