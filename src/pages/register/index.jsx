import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import RegisterSvg from '../../icons/svg/register.svg'

import './index.css'


const Register = () => {

	const navigate = useNavigate()

	const onFinish = values => {
		console.log('Success:', values)

		notification.success({
			message: '温馨提示',
			description:
				'注册成功,请登录!',
		});

		navigate('/login')
	}

	return (
		<div className="login-container">
			<div>
				<p className="login-welcome">免费注册</p>
				<img src={RegisterSvg} alt=""/>
			</div>
			<div className="login-form">
				<div className="login-form-title">弄因茶油后台管理系统</div>
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

					<Form.Item
						label=""
						name="confirm"
						rules={[
							{
								required: true,
								message: '请确认密码',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('密码不一致'));
								},
							})
						]}
					>
						<Input.Password prefix={<LockOutlined />} placeholder="请确认密码" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{width: '100%'}}>
							注 册
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}


export default Register