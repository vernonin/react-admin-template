import React, { useEffect } from "react"
import axios from 'axios'
import CensusCrad from './components/user/CensusCrad'
import '../../mock/user'
import { Table, Tag, Space, Button, Card, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Search } = Input


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <a onClick={c => console.log('fs', record)}>{text}</a>,
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
          let color = tag === '管理员' ? 'green' : 'geekblue'
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
        <a onClick={e => console.log('修改', text, record)}>修改</a>
        <a onClick={e => console.log('删除', text, record)}>删除</a>
      </Space>
    ),
  },
]

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
    tags: ['普通用户'],
  },
	{
    key: '4',
    name: '陶渊明',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['普通用户'],
  },
	{
    key: '5',
    name: '李白',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['管理员'],
  },
  {
    key: '6',
    name: '杜甫',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['普通用户'],
  },
  {
    key: '7',
    name: '白居易',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['普通用户'],
  },
	{
    key: '8',
    name: '陶渊明',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['普通用户'],
  },
	{
    key: '9',
    name: '李白',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['普通用户'],
  },
  {
    key: '10',
    name: '杜甫',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['管理员'],
  },
  {
    key: '11',
    name: '白居易',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['普通用户'],
  },
	{
    key: '12',
    name: '陶渊明',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['普通用户'],
  },
]

const User = () => {
	
	const getUsers = async () => {
		const res = await axios.get('/mock/usermsg')
		console.log(res.data)
	}

	useEffect(() => {
		getUsers()
	}, [])

	const onSearch = value => {
		let searchList = data.filter(user => user.name === value)
		console.log(searchList)

	}
	const admin = data.filter(user => user.tags.includes('管理员'))
	const usersCensus = {total: data.length, admin: admin.length}
	return (
		<div>
			<CensusCrad census={usersCensus}/>
			
			<Card title="所有用户" extra={<Search placeholder="请输入名字" onSearch={onSearch} enterButton />}>
				<Button block type="dashed" icon={<PlusOutlined />} >添加</Button>

				<Table rowSelection={{type: 'checkbox'}} columns={columns} dataSource={data} />
			</Card>
		</div>
	)
}

export default User