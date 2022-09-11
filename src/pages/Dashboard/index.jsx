import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Card } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import indexBanar from '../../mock/indexBanar'
import formatPrice from '../../utils/formatPrice'
import salesList from '../../mock/charts/salesList'

import BanarCard from '../../components/BanarCard'
import DemoArea from '../../components/charts/DemoArea'
import DemoBullet from '../../components/charts/YieldBullet'
import YieldColumn from '../../components/charts/YieldColumn'
import HometownSpecialty from '../../components/charts/HometownSpecialty'

const SaleRow = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	line-height: 32px;
	font-weight: 600;
	border-bottom: 1px solid #eee;
`
const saleTopStyle = {
	height: '254px',
	overflow: 'hidden',
	overflowY: 'scroll',
	scrollbarWidth: '0'
}

const banarStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'

}

const indexStyle = index => {
	let bgColor = '#999'
	if (index === 0) {
		bgColor = '#1979C9'
	} else if (index === 1) {
		bgColor = '#D62A0D'
	} else if (index === 2) {
		bgColor = '#FAA219'
	}

	return {
		display: 'inline-block',
		width: '15px',
		height: '15px',
		lineHeight: '15px',
		textAlign: 'center',
		color: '#fff',
		fontSize: '8px',
		borderRadius: '50%',
		backgroundColor: bgColor,
		marginRight: '10px'
	}
}

const Dashboard = () => {
	const { totalSales, totalYields, totalExports, targetYields } = indexBanar()
	const [ saleTop, setSaleTop ] = useState([])
	const [ totalSale, setTotalSale ] = useState({})
	const [ totalYield, setTotalYield ] = useState({})
	const [ totalExport, setTotalExport ] = useState({})
	const [ targetYield, setTargetYield ] = useState({})

	useEffect(() => {
		setSaleTop(salesList())
		setTotalSale(totalSales)
		setTotalYield(totalYields)
		setTotalExport(totalExports)
		setTargetYield(targetYields)
	}, [])

	return (
		<div>
			<div style={banarStyle}>
				<BanarCard
					title={totalSale.totalName}
					value={`￥${formatPrice(totalSale.totalSale)}`}
					subtitle={totalSale.todayName}
					subvalue=	{`￥${formatPrice(totalSale.todaySale)}`}
				>
					<div style={{...banarStyle, height: '100%', fontSize: '14px'}}>
						<span>月同比：{<ArrowDownOutlined style={{color: "#f5222d"}} />}{totalSale.monthGrowth}</span>
						<span>日同比：{<ArrowUpOutlined style={{color: "#52c41a"}} />}{totalSale.dailyGrowth}</span>
					</div>
				</BanarCard>
				<BanarCard
					title={totalYield.totalName}
					value={`${formatPrice(totalYield.totalYield)} t`}
					subtitle={totalYield.yearName}
					subvalue=	{`${formatPrice(totalYield.yearYield)} t`}
				>
					<div style={{...banarStyle, height: '100%', fontSize: '14px'}}>
						<span>年同比：{<ArrowUpOutlined style={{color: "#52c41a"}} />}{totalYield.yearGrowth}</span>
						<span>季度同比：{<ArrowUpOutlined style={{color: "#52c41a"}} />}{totalYield.quarterGrowth}</span>
					</div>
				</BanarCard>
				<BanarCard
					title={totalExport.totalName}
					value={`${formatPrice(totalExport.totalYield)} t`}
					subtitle={totalExport.yearName}
					subvalue=	{`${formatPrice(totalExport.yearYield)} t`}
				>
					<div style={{...banarStyle, height: '100%', fontSize: '14px'}}>
						<span>年同比：{<ArrowDownOutlined style={{color: "#f5222d"}} />}{totalExport.yearGrowth}</span>
						<span>季度同比：{<ArrowDownOutlined style={{color: "#f5222d"}} />}{totalExport.quarterGrowth}</span>
					</div>
				</BanarCard>
				<BanarCard
					title={targetYield.name}
					value={targetYield.proportion}
					subtitle={`计划产量 ${formatPrice(targetYield.target)}t`}
					subvalue={`实际产量 ${formatPrice(targetYield.value)}t`}
				>
					<DemoBullet />
				</BanarCard>
			</div>
			<Row gutter={14} style={{height: '320px', marginTop: '20px'}}>
				<Col span={16}>
					<Card size="small" title="四大产业的上周销量">
						<DemoArea />
					</Card>
				</Col>
				<Col span={8}>
					<Card size="small" title="上周销量榜TOP10">
						<div style={saleTopStyle} className="hidden-scroll">
							{
								saleTop.map((item, index) => {
									return (
										<SaleRow key={item.value}>
											<div>
												<span style={indexStyle(index)}>{index + 1}</span>
												<span>{item.name}</span>
											</div>
											<div>￥{formatPrice(item.value)}</div>
										</SaleRow>
									)
								})
							}
						</div>
					</Card>
				</Col>
			</Row>
			<Card size="small" style={{marginTop: '20px'}} title="主要特产的产量">
				<Row>
					<Col span={18}>
						<YieldColumn />
					</Col>
					<Col span={6}>
						<HometownSpecialty />
					</Col>
					
				</Row>
			</Card>
		</div>
	)
}

export default Dashboard
