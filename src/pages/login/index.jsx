import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import LonginSvg from '../../icons/svg/login.svg'

import './index.css'


const Login = () => {

	const navigate = useNavigate()

	const onFinish = values => {
		console.log('Success:', values)

		navigate('/', { replace: true })
	}

	return (
		<div className="login-container">
			<div>
				<p className="login-welcome">欢迎登录</p>
				<img src={LonginSvg} alt=""/>
			</div>
			<div className="login-form">
				<div className="login-form-title">弄因农产品后台管理系统</div>
				<Form
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						label=""
						name="username"
						rules={[
							{
								required: true,
								message: '请输入用户名',
							},
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="请输入用户名"/>
					</Form.Item>

					<Form.Item
						label=""
						name="password"
						rules={[
							{
								required: true,
								message: '请输入密码',
							},
						]}
					>
						<Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
					</Form.Item>

					<Form.Item>
						<div className='peration-item'>
							<span>没有账户?<Link to={'/register'}>立即注册</Link></span>
							<span>忘记密码?<Link to={''}>立即找回</Link></span>
						</div>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{width: '100%'}}>
							登 录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}


export default Login