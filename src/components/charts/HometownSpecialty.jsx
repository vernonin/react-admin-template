import React from 'react'
import { WordCloud } from '@ant-design/plots'

import getSpecialty from '../../mock/charts/specialtyData'

const HometownSpecialty = () => {
	
	const data = getSpecialty()
	

	const config = {
    data,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 80],
    },
    // 设置交互类型
    interactions: [
      {
        type: 'element-active',
      },
    ],
    state: {
      active: {
        // 这里可以设置 active 时的样式
        style: {
          lineWidth: 3,
        },
      },
    },
  }

	
	return (
		<div style={{width: '100%', height: '250px'}}>
			<WordCloud {...config}/>
		</div>
	)
}

export default HometownSpecialty