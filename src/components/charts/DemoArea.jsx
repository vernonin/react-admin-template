import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'

import weeklyAles from '../../mock/charts/weeklyAles'

const DemoArea = () => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    setData(weeklyAles())
  }, [])


  const config = {
    data,
    xField: 'week',
    yField: 'value',
    seriesField: 'name',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => {
          let value = `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)

          return value + '件'
        },
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219', '#9400D3'],
  };

	return (
		<div style={{width: '100%', height: '254px'}}>
			<Line {...config} />
		</div>
	)
}

export default DemoArea