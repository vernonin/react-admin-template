import { colorWithAlpha } from '../../utils/common';
import { theme } from 'antd';
const token = {
  colorPrimary: '#ffffff',
  borderRadius: 2,
  // 派生变量，影响范围小
  colorBgContainer: '#000000',
  colorBgLayout: '#000000',
}

const menu = {
  itemActiveBg: colorWithAlpha(token.colorPrimary, 0.08),
  itemSelectedBg: colorWithAlpha(token.colorPrimary, 0.08)
}

export default {
  token,
  components: {
    Menu: menu
  },
  algorithm: theme.darkAlgorithm
}