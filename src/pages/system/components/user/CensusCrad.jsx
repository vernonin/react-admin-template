import React from 'react'
import styled from 'styled-components'
import { Statistic, Row, Col } from 'antd'

const Container = styled.div`
	text-align: center;
	margin: 20px 10px;
	padding: 10px 0px;
	background: #f0f2f5;
`

 const CensusCrad = props => {

	const { total, admin } = props.census

	return (
		<Container>
			<Row>
				<Col span={8}>
					<Statistic title="总用户量" value={total} />
				</Col>
				<Col span={8}>
					<Statistic title="管理员人数" value={admin} />
				</Col>
				<Col span={8}>
					<Statistic title="普通用户人数" value={total - admin} />
				</Col>
			</Row>
		</Container>
	)
}

export default CensusCrad