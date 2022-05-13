/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios"
import React, { useState, useEffect, useRef } from "react"
import { Table, Space,Tag, Button, Card, Input, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import UserFrom from './components/user/UserFrom'
import CensusCrad from './components/user/CensusCrad'
import ViewProfile from "./components/user/ViewProfile"
import '../../mock/user'

const { Search } = Input


const User = () => {
	const columns = [
		{
			key: 'name',
			title: '姓名',
			dataIndex: 'name',
			id: 'name',
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			render: (text, record) => <a onClick={() => onShow(record)}>{text}</a>,
		},
		{
			key: 'sex',
			title: '性别',
			dataIndex: 'sex',
			id: 'sex',
			render: (text, record) => <span>{text}</span>,
		},
		{
			key: 'birthday',
			title: '出生日期',
			dataIndex: 'birthday',
			id: 'birthday',
		},
		{
			key: 'address',
			title: '地址',
			dataIndex: 'address',
			id: 'address',
		},
		
		{
			key: 'tag',
			title: '角色',
			dataIndex: 'tag',
			id: 'tag',
			render: text => (
				<Tag color={text === '管理员' ? 'green' : 'orange'}>{text}</Tag>
			)
		},
		{
			key: 'action',
			title: '操作',
			id: 'action',
			align: 'center',
			width: 200,
			render: (text, record) => (
				<Space size="middle">
					<a onClick={() => onEdit(record)}>修改</a>
					<a style={{color: '#f40'}} onClick={() => onDelete(record)}>删除</a>
				</Space>
			),
		},
	]

	const [users, setUsers] = useState([])

	const [show, setShow] = useState(false)

	const [isModal, setIsModal] = useState(false)

	const [userInfo, setUserInfo] = useState({})

	const userFrom = useRef()
	
	const getUsers = async () => {
		const res = await axios.get('/mock/usermsg')
		const { list } = res.data
		let users = list.map(item => ({...item, key: item.id}))
		setUsers(users)
	}

	const admin = users.filter(user => user.tag.includes('管理员'))
	const usersCensus = {total: users.length, admin: admin.length}

	useEffect(() => {
		getUsers()
	}, [])

	const handleOk = () => {
		userFrom.current.submit()
	}
	const handleCancel = () => {
		setIsModal(false)
	}

	const onShow = user => {
		setShow(true)
		setUserInfo(user)
	}

	const onEdit = user => {
		setIsModal(true)

		console.log(userFrom.current);
		userFrom.current && userFrom.current.setFieldsValue({name: '黄琳',sex: '男'})
	}
	const onDelete = user => {
		let newUsers = users.filter(item => item.id !== user.id)
		
		setUsers(newUsers)
	}

	const onSearch = value => {
		if(value.trim() === '') {
			return getUsers()
		}
		let searchList = users.filter(user => user.name === value)
		setUsers(searchList)
	}
	const onSubmit = info => {
		
		const tag = info.tag ? '管理员' : '普通用户'

		const user = {...info, tag, id: new Date(), key: new Date()}

		setUsers([user, ...users])

		setIsModal(false)

	}

	return (
		<div>
			<CensusCrad census={usersCensus} />
			
			<Card title="所有用户" extra={<Search placeholder="请输入名字" onSearch={onSearch} enterButton />}>
				<Button block type="dashed" icon={<PlusOutlined />} onClick={() => setIsModal(true)}>添加</Button>

				<Table rowSelection={{type: 'checkbox'}} columns={columns} dataSource={users} />
			</Card>

			<ViewProfile visible={show} onClose={() => setShow(false)} info={userInfo}/>

			<Modal width={600} title="添加用户" visible={isModal} onOk={handleOk} onCancel={handleCancel}>
				<UserFrom onSubmit={onSubmit} ref={userFrom} />
			</Modal>
		</div>
	)
}

export default User