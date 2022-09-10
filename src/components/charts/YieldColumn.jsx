import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

import getSpecialty from '../../mock/charts/specialtyData'

const YieldColumn = () => {

	const [yieldData, setYieldData] = useState([])

	const handleData = () => {

		let data = getSpecialty()
		let arr = []
		data.forEach(item => {
			arr.push({ type: item.x, sales: item.value })
		})

		setYieldData(arr)
	}

	useEffect(() => {
		handleData()
	}, [])

  const config = {
    data: yieldData,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '产量',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return (
		<div style={{width: '100%', height: '250px'}}>
			<Column {...config} />
		</div>
	);
};

export default YieldColumn