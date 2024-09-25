
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import themeConfig from './config';

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale('zh-cn');

const AppTheme = ({ children }) => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={themeConfig.dark}
    >
      {children}
    </ConfigProvider>
  )
}

export default AppTheme;