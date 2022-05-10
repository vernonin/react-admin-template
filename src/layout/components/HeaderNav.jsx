import { Menu, Dropdown, Space, Layout } from 'antd';
import { DownOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout

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
          <span>
            退出登录
          </span>
        ),
				icon: <LogoutOutlined />,
      }
    ]}
  />
)
const HeaderNav = () => {
	return (
		<Header className='layout-header'>
			<div className="layout-header-content">
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