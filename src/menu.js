/**
 * icon：菜单图标
 * key：路由地址
 * label: 菜单名称
 * children：子菜单
 */
import {
	SettingOutlined,
	FileProtectOutlined,
	FundProjectionScreenOutlined
 } from '@ant-design/icons'

const menu = [
	{
		label: '首页',
		key: '/dashboard',
		icon: <FundProjectionScreenOutlined />,
	},
	{
		label: '系统',
		key: '/system',
		icon: <SettingOutlined />,
		children: [
			{
				label: '用户',
				key: '/system/user'
			},
			{
				label: '设置',
				key: '/system/setting'
			}
		]
	},
	{
		label: '文档',
		key: '/awesome',
		icon: <FileProtectOutlined />,
		children: [
			{
				label: 'Markdown',
				key: '/awesome/markdown'
			},
			{
				label: 'Excel',
				key: '/awesome/excel'
			}
		]
	}
]

export default menu