import React, { useState } from 'react'
import { Menu, Dropdown, Space, Layout } from 'antd'
import { Link } from 'react-router-dom'

import { DownOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons'

import Notice from '../../components/Notice'

const { Header } = Layout

const onLogout = () => {
	console.log('退出登录做的一些操作...')
}

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            个人中心
          </a>
        ),
        icon: <SmileOutlined />,
      },
      {
        label: (
          <Link to={'/login'} onClick={onLogout}>
            退出登录
          </Link>
        ),
				icon: <LogoutOutlined />,
      }
    ]}
  />
)

const HeaderNav = () => {

	const [notice] = useState([
		'           登   高           ',
		'            杜 甫            ',
		'风急天高猿啸哀，渚清沙白鸟飞回。',
		'无边落木萧萧下，不尽长江滚滚来。',
		'万里悲秋常作客，百年多病独登台。',
		'艰难苦恨繁霜鬓，潦倒新停浊酒杯。',
	])

	return (
		<Header className='layout-header'>
			<div className="layout-header-content">
				<Notice notices={notice}/>
				<Dropdown overlay={menu}>
					<a onClick={e => e.preventDefault()} href={'/'}>
						<Space>
							设 置
							<DownOutlined />
						</Space>
					</a>
				</Dropdown>
			</div>	
		</Header>
		
	)
}


export default HeaderNav