import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './features/setting/settingSlice';

// 创建store
export default configureStore({
  // feature中创建多个子reducer 最终在这里进行合并
  reducer: {
    setting: settingReducer
  },
  // 中间件
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({ serializableCheck: false })
});