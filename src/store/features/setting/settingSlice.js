import { createSlice } from '@reduxjs/toolkit'
import { getItemByStrong, setItemByStrong } from '../../../utils/common'

const initialState = {
  token: getItemByStrong('token') || '',
  theme: getItemByStrong('light') || 'light',
  systemName: getItemByStrong('systemName') || 'React Admin Template',
  headerHeight: getItemByStrong('headerHeight') || 58,
  asideWidth: getItemByStrong('asideWidth') || 220,
  asideCollapeWidth: getItemByStrong('asideCollapeWidth') || 48,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setItemByStrong('light', state.theme);
    },
    setSystemName: (state, action) => {
      state.systemName = action.payload;
      setItemByStrong('systemName', action.payload);
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
      setItemByStrong('headerHeight', action.payload);
    },
    setAsideWidth: (state, action) => {
      state.asideWidth = action.payload;
      setItemByStrong('asideWidth', action.payload);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      setItemByStrong('token', action.payload)
    }
  }
});

export const {
  toggleTheme, setSystemName,
  setHeaderHeight, setAsideWidth, setToken
} = settingSlice.actions;

export default settingSlice.reducer;
