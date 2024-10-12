import React, { useState } from 'react';
import { Button, Table } from 'antd';

import {
  defaultSelections,
  defaultTableTools,
  defaultToolbarActions
} from './defaultSetting';
import Header from './Header';

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

  return (
    <div>
      <Header
        methods={{
          add() {
            console.log('新增')
          },
          edit() {
            console.log('编辑')
          }
        }}
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
