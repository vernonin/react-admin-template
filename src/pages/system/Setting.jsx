import React from "react";
import DataGrid from "../../components/DataGrid";
import DynamicIsland from '../../layout/components/DynamicIsland';

const quickSelections = [
	{
		key: 'male',
		text: '选中所有男性',
		onSelect: (_, tableData) => tableData.filter(item => item.sex === '男').map(v => v.id)
	},
	{
		key: 'famale',
		text: '选中所有女性',
		onSelect: (_, tableData) => tableData.filter(item => item.sex === '女').map(v => v.id)
	}
]

const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
	},
	{
		title: '性别',
		dataIndex: 'sex',
	},
	{
    title: '年龄',
    dataIndex: 'age',
  },
	{
		title: '住址',
		dataIndex: 'address',
	}
]

const Setting = () => {
	const [data, setData] = React.useState([
		{ id: 101, name: 'John Brown', sex: '男', age: 32, address: 'New York No. 1 Lake Park' },
		{ id: 102, name: 'Jim Green', sex: '男', age: 42, address: 'London No. 1 Lake Park' },
		{ id: 103, name: 'Joe Black', sex: '女', age: 32, address: 'Sidney No. 1 Lake Park' },
	])

	return (
		<DataGrid
			columns={columns}
			data={data}
			quickSelections={quickSelections}
			toolbarActions={[
				{ key: 'edit', text: '编辑', onClick: rowData => DynamicIsland.success('编辑成功！') },
				{ key: 'del', text: '删除', onClick: rowData => DynamicIsland.error('删除失败！') },
				{ key: 'info', text: '详情', onClick: rowData => DynamicIsland.info('查看详细！') },
			]}
		/>
	)
}

export default Setting