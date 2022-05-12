import { Carousel } from 'antd'

const contentStyle = {
  height: '30px',
  color: 'blue',
  lineHeight: '30px',
  textAlign: 'left',
	fontFamily: '楷体',
	fontSize: '18px',
	fontWeight: '700',
  background: 'transparent',
};

const Notice = props => {
	
	const { notices } = props
	return (
		<Carousel autoplay dotPosition="right" dots={false} style={{width: '520px', height: '40px'}}>
			{
				notices.map(item => {
					return (
						<div>
							<p style={contentStyle}>{ item }</p>
						</div>
					)
				})
			}
		</Carousel>
	)
}

export default Notice