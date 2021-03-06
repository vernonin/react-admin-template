import React from 'react'
import { Row, Col } from 'antd'

import ClassifyPie from '../../components/charts/ClassifyPie'
import PercentageBar from '../../components/charts/PercentageBar'
import HotSpecialty from '../../components/charts/HotSpecialty'
import HometownSpecialty from '../../components/charts/HometownSpecialty'
import SalesVolume from '../../components/charts/SalesVolume'
import DemoArea from '../../components/charts/DemoArea'
import DemoLine from '../../components/charts/DemoLine'

const style = {padding: '0px 10px'}
const Dashboard = () => {

	return (
		<div style={style}>
			<Row>
				<Col span={6}>
					<HotSpecialty />
				</Col>
				<Col span={12}>
				<HometownSpecialty />
				</Col>
				<Col span={6}>
					<ClassifyPie />
					<PercentageBar />
				</Col>
			</Row>
			<Row style={{height: '320px'}}>
				<Col span={8}>
					<SalesVolume />
				</Col>
				<Col span={8}>
					<DemoLine />
				</Col>
				<Col span={8}>
					<DemoArea />
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard
