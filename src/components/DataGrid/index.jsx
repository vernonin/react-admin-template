import React, { useState } from 'react';
import { Button, Table } from 'antd';

import {
  defaultSelections,
  defaultTableTools,
  defaultToolbarActions
} from './defaultSetting';
import Header from './Header';
import DynamicIsland from '../../layout/components/DynamicIsland';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const DataGrid = (props) => {
  // 解构props
  const { data, columns, quickSelections, toolbarActions } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState(
    () => data ?? [],
  )
  const [tableColumns] = useState(() => {
    if (Array.isArray(toolbarActions) && toolbarActions.length > 0) {
      return columns.concat({
        title: '操作',
        dataIndex: 'action',
        align: 'center',
        render: (_, rowData) => {
          return toolbarActions.map(item => {
            return (
              <Button key={item.key} type="text" onClick={() => item.onClick && item.onClick(rowData)}>
                {item.text}
              </Button>
            )
          })
        }
      })
    }
    return columns;
  })

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys),
    selections: quickSelections ? defaultSelections.concat(quickSelections.map(item => ({
      ...item,
      onSelect: () => {
        if (item.onSelect && typeof item.onSelect === 'function') {
          setSelectedRowKeys(item.onSelect(selectedRowKeys, tableData))
        }
      },
    }))) : defaultSelections
  };

  const fetchDelete = () => {
    DynamicIsland.loading('删除中...')
    setTimeout(() => {
      DynamicIsland.success('删除成功！');
    }, 2000);
  }

  const headerMethods = {
    add() {
      console.log('新增')
    },
    edit() {
      console.log('编辑')
    },
    batchDel() {
      if (selectedRowKeys.length < 1) {
        DynamicIsland.warning('请先选择要删除的数据！')
      } else {
        DynamicIsland.confirm('确定要删除选中的数据吗？', {
          duration: 4000,
          onOk: () => fetchDelete()
        })
      }
    },
  }

  return (
    <div>
      <Header
        methods={headerMethods}
        tools={defaultTableTools}
        toolbarActions={defaultToolbarActions}
      />
      <Table
        rowKey="id"
        columns={tableColumns}
        dataSource={tableData}
        onChange={onChange}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export default React.memo(DataGrid);
