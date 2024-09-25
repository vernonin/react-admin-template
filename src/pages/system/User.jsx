/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios"
import moment from 'moment'
import React, { useState, useEffect, useRef } from "react"
import { Table, Space,Tag, Button, Card, Input, Modal, Popconfirm } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

import UserFrom from './components/user/UserFrom'
import CensusCrad from './components/user/CensusCrad'
import ViewProfile from "./components/user/ViewProfile"
import '../../mock'

const { Search } = Input

const dateFormat = 'YYYY-MM-DD'

const User = () => {
	const columns = [
		{
			key: 'name',
			title: '姓名',
			dataIndex: 'name',
			id: 'name',
			align: 'center',
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			render: (text, record) => <a onClick={() => onShow(record)}>{text}</a>,
		},
		{
			key: 'sex',
			title: '性别',
			dataIndex: 'sex',
			id: 'sex',
			align: 'center',
			render: (text, record) => <span>{text}</span>,
		},
		{
			key: 'birthday',
			title: '出生日期',
			dataIndex: 'birthday',
			id: 'birthday',
			align: 'center',
		},
		{
			key: 'address',
			title: '地址',
			dataIndex: 'address',
			id: 'address',
			align: 'center',
		},
		
		{
			key: 'tag',
			title: '角色',
			dataIndex: 'tag',
			id: 'tag',
			align: 'center',
			render: text => (
				<Tag color={text === '管理员' ? 'green' : 'orange'}>{text}</Tag>
			)
		},
		{
			key: 'action',
			title: '操作',
			id: 'action',
			align: 'center',
			width: 120,
			render: (text, record) => (
				<Space size="middle">
					<Button type="link" icon={<EditOutlined />} onClick={() => onEdit(record)}>修改</Button >
					<Popconfirm
						placement="topRight"
						title="确定删除该用户吗？"
						onConfirm={() => onDelete(record)}
						okText="确定"
						cancelText="取消"
					>
						<Button danger type="text" icon={<DeleteOutlined />}>删除</Button >
				</Popconfirm>
				</Space>
			),
		},
	]

	const [users, setUsers] = useState([])        // 用户数据列表

	const [show, setShow] = useState(false)       // 查看用户弹框开关

	const [isModal, setIsModal] = useState(false) // 添加用户弹框开关

	const [userInfo, setUserInfo] = useState({})  // 单个用户信息

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

		let { name, sex, phone, address, interest, tag, birthday } = user
		
		birthday = birthday ? birthday : '2000-06-22'

		let admin = tag === '管理员' ? true : false
		let userInfo = {
			name: name ? name: '',
			sex: sex ? sex: '',
			phone: phone ? phone: '',
			address: address ? address: '',
			interest: interest ? interest: '',
			birthday: moment(birthday, dateFormat),
			tag: admin ? admin : ''
		}

		setTimeout(() => {
			userFrom.current && userFrom.current.setFieldsValue(userInfo)
		}, 500)
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
		
		let { birthday } = info

		birthday = birthday.format(dateFormat)

		const tag = info.tag ? '管理员' : '普通用户'

		const user = {...info, birthday, tag, id: new Date(), key: new Date()}

		setUsers([user, ...users])

		setIsModal(false)

	}

	return (
		<div>
			<CensusCrad census={usersCensus} />
			
			<Card title="所有用户" extra={<Search placeholder="请输入名字" onSearch={onSearch} enterButton />}>
				<Button block type="dashed" icon={<PlusOutlined />} onClick={onEdit}>添加</Button>

				<Table rowSelection={{type: 'checkbox'}} columns={columns} dataSource={users} />
			</Card>

			<ViewProfile visible={show} onClose={() => setShow(false)} info={userInfo}/>

			<Modal width={600} title="添加用户" open={isModal} onOk={handleOk} onCancel={handleCancel}>
				<UserFrom onSubmit={onSubmit} ref={userFrom} />
			</Modal>
		</div>
	)
}

export default User