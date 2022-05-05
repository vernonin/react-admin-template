import { WechatOutlined, QqOutlined, GithubOutlined } from '@ant-design/icons'

const FooterNav = () => {
	return (
		<div className="layout-footer-content">
			<p>MADE WITH BY ❤ HUANGLIN ❤ </p>
			<p className="layout-footer-contact">
				联系方式:&nbsp;&nbsp;
				<WechatOutlined /> 
				: auin244&nbsp;&nbsp;
				<QqOutlined />
				: 2762565371&nbsp;&nbsp;
				<GithubOutlined />
				: <a href='https://github.com/vernonin' rel="noreferrer">https://github.com/vernonin</a>
			</p>
				
		</div>
	)
}


export default FooterNav