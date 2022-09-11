import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
  const data = [
    {
      title: '',
      ranges: [60000],
      "实际生产": [46139],
      "目标生产": 50000,
    },
  ];
  const config = {
    data,
    measureField: '实际生产',
    rangeField: 'ranges',
    targetField: '目标生产',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4',
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    label: {
      target: false,
    },
  };
  return (
		<div style={{height: '22px', marginTop: '6px'}}>
			<Bullet {...config} />
		</div>
	);
};

export default DemoBullet
