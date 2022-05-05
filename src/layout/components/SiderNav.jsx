import React, { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
const { Sider } = Layout

const titleStyle = {color: 'lightblue', height: '64px', lineHeight: '64px',fontWeight: '600', fontFamily: '楷体', textAlign: 'center'}

// 生成菜单item的函数
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// 生成菜单item的
const items = [
  getItem('首页', 'sub1', <MailOutlined />),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]

const SiderNav = () => {

	const [current, setCurrent] = useState('2')

	const onClick = (e) => {
		console.log('click-->>', e);
		setCurrent(e.key);
	}
	
	return (
		<Sider className='layout-sider'>
			<h2 style={titleStyle}>
				弄因茶油后台
				<>
					<Menu
						theme={'dark'}
						onClick={onClick}
						style={{
							width: '100%',
						}}
						defaultOpenKeys={['sub1']}
						selectedKeys={[current]}
						mode="inline"
						items={items}
					/>
				</>
			</h2>
		</Sider>
	)
}


export default SiderNav