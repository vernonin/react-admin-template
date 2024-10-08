import { Carousel } from 'antd'
import getRandomColor from '../utils/getRandomColor'

const Advert = ({ notices }) => {
	return (
		<Carousel autoplay dotPosition="right" dots={false} style={{width: '520px', height: '30px'}}>
			{
				notices.map(item => {
					const contentStyle = {
						height: '30px',
						lineHeight: '30px',
						textAlign: 'left',
						fontFamily: '楷体',
						fontSize: '18px',
						fontWeight: '700',
						color: getRandomColor(),
						background: 'transparent',
					}
					return (
						<div key={item}>
							<p style={contentStyle}>{ item }</p>
						</div>
					)
				})
			}
		</Carousel>
	)
}

export default Advert