import { Drawer, Divider, Col, Row } from 'antd';


const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const ViewProfile = (props) => {

	const info = props.info
	return (
		<Drawer
			width={640}
			placement="right"
			closable={false}
			onClose={props.onClose}
			visible={props.visible}
		>
			<p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
				用户信息
			</p>
			<p className="site-description-item-profile-p">基本信息</p>
			<Row>
				<Col span={12}>
					<DescriptionItem title="姓名" content={info.name || ''} />
				</Col>
				<Col span={12}>
					<DescriptionItem title="账户名" content={info.nickName || ''} />
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<DescriptionItem title="住址" content={info.address || ''} />
				</Col>
				<Col span={12}>
					<DescriptionItem title="国家" content="中国" />
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<DescriptionItem title="出生日期" content={info.birthday || ''} />
				</Col>
				<Col span={12}>
					<DescriptionItem title="网址" content="-" />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<DescriptionItem
						title="兴趣爱好"
						content={info.interest || ''}
					/>
				</Col>
			</Row>
			<Divider />
			<p className="site-description-item-profile-p">联系他</p>
			<Row>
				<Col span={12}>
					<DescriptionItem title="邮箱" content="AntDesign@example.com" />
				</Col>
				<Col span={12}>
					<DescriptionItem title="电话" content={'+86 ' + info.phone || ''} />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<DescriptionItem
						title="Github"
						content={
							<a href="http://github.com/ant-design/ant-design/">
								github.com/ant-design/ant-design/
							</a>
						}
					/>
				</Col>
			</Row>
		</Drawer>
	)
}

export default ViewProfile