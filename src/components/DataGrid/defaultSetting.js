import { Table } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ImportOutlined,
  SyncOutlined,
  DownloadOutlined,
  SettingOutlined,
  ColumnHeightOutlined,
} from '@ant-design/icons';


export const defaultSelections = [
  Table.SELECTION_ALL,
  Table.SELECTION_INVERT,
  Table.SELECTION_NONE
];

export const defaultToolbarActions = [
  {
    key: 'add',
    text: '新增',
    type: 'primary',
    icon: <PlusOutlined />
  },
  {
    key: 'edit',
    text: '编辑',
    icon: <EditOutlined />
  },
  {
    key: 'import',
    text: '批量导入',
    icon: <ImportOutlined />
  },
  {
    key: 'batchDel',
    text: '批量删除',
    danger: true,
    icon: <DeleteOutlined />
  }
]

export const defaultTableTools = [
  {
    key: 'sync',
    text: '刷新',
    icon: <SyncOutlined />
  },
  {
    key: 'download',
    text: '下载',
    icon: <DownloadOutlined />
  },
  {
    key: 'size',
    text: '大小',
    icon: <ColumnHeightOutlined />
  },
  {
    key: 'setting',
    text: '设置',
    icon: <SettingOutlined />
  }
]
