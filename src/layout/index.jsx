import './index.css'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import SiderNav from './components/SiderNav'

import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

const index = () => {
	return (
		<Layout>
			<SiderNav />
      <Layout className='layout-content'>
        <Header className='layout-header'>
					<HeaderNav/>
				</Header>
        <Content>Content</Content>
        <Footer className="layout-footer">
					<FooterNav />
				</Footer>
      </Layout>
    </Layout>
	)
}


export default index;