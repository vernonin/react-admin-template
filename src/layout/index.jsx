import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import SiderNav from './components/SiderNav'
import useBoolean from '../hooks/useBoolean';
import { useAppSelector } from '../store/hooks'

import './index.css'

const { Content } = Layout

const Loading = () => (
	<div className='loading'>
		<Spin size="large" />
	</div>
)

const Index = () => {
  const headerHeight = useAppSelector(state => state.setting.headerHeight);

  const [menuCollape, { toggle }] = useBoolean(false)

  return (
    <Layout>
      <SiderNav menuCollape={menuCollape} toggleCollapse={toggle} />
      <Layout className='layout-content'>
        <HeaderNav menuCollape={menuCollape} />
        <Content style={{paddingTop: headerHeight + 20 + 'px'}} className='layout-content-over'>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Content>
        <FooterNav />
      </Layout>
    </Layout>
  )
}

export default Index