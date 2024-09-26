
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import themeConfig from './config';
import { useAppSelector } from '../store/hooks';

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale('zh-cn');


const AppTheme = ({ children }) => {
  const theme = useAppSelector(state => state.setting.theme);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={themeConfig[theme] || 'light'}
    >
      {children}
    </ConfigProvider>
  )
}

export default AppTheme;