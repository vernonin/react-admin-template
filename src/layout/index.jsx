import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import SiderNav from './components/SiderNav'


import './index.css'

const { Header, Footer, Content } = Layout

const index = () => {
	return (
		<Layout>
			<SiderNav />
      <Layout className='layout-content'>
        <Header className='layout-header'>
					<HeaderNav/>
				</Header>
				<Content>

					<Outlet />

				</Content>
        <Footer className="layout-footer">
					<FooterNav />
				</Footer>
      </Layout>
    </Layout>
	)
}


export default index