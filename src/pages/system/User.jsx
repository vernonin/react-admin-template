import React from "react"

import { Table, Tag, Space } from 'antd'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a onClick={c => console.log('fs', c)}>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '角色',
    key: 'tags',
    dataIndex: 'tags',
		width: 180,
		align: 'center',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
		align: 'center',
		width: 200,
    render: (text, record) => (
      <Space size="middle">
        <a>修改</a>
        <a>删除</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '李白',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['管理员'],
  },
  {
    key: '2',
    name: '杜甫',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['普通用户'],
  },
  {
    key: '3',
    name: '白居易',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['超级管理员'],
  },
	{
    key: '4',
    name: '陶渊明',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['经理'],
  },
	
];
const User = () => {
	return (
		<div>
			<Table rowSelection={{type: 'checkbox'}} columns={columns} dataSource={data} />
		</div>
	)
}

export default User