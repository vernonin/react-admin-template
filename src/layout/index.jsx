import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import SiderNav from './components/SiderNav'

import './index.css'

const { Content } = Layout

const Loading = () => (
	<div className='loading'>
		<Spin size="large" />
	</div>
)

const index = () => {
	return (
		<Layout>
			<SiderNav />
			<Layout className='layout-content'>
				<HeaderNav/>
				<Content className='layout-content-over'>
					<Suspense fallback={<Loading />}>
						<Outlet />
					</Suspense>
				</Content>
				<FooterNav />
      </Layout>
    </Layout>
	)
}

export default index