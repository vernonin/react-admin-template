import { Layout } from 'antd'
import styled from 'styled-components'
import { WechatOutlined, QqOutlined, GithubOutlined } from '@ant-design/icons'

const { Footer } = Layout

const LoveIcon = styled.span`
	color: #f10;
	font-size: 12px;
`

const FooterNav = () => {

	return (
		<Footer className="layout-footer">
			<div className="layout-footer-content">
				<p>MADE WITH BY <LoveIcon>❤</LoveIcon>HUANGLIN<LoveIcon>❤</LoveIcon></p>
				<p className="layout-footer-contact">
					联系方式:&nbsp;&nbsp;
					<WechatOutlined /> 
					&nbsp;: auin244&nbsp;&nbsp;
					<QqOutlined />
					&nbsp;: 2762565371&nbsp;&nbsp;
					<GithubOutlined />
					&nbsp;: <a href='https://github.com/vernonin' target="_blank" rel="noreferrer">https://github.com/vernonin</a>
				</p>
			</div>
		</Footer>
	)
}


export default FooterNav