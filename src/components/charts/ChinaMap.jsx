import React from 'react'
import { ChoroplethMap } from '@ant-design/maps'

import getProvinceData from '../../mock/charts/provinceData'

const ChinaMap = () => {

  const config = {
    map: {
      type: 'mapbox',
      style: 'blank',
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: getProvinceData(),
      joinBy: {
        sourceField: 'code',
        geoField: 'adcode',
      },
    },
    viewLevel: {
      level: 'country',
      adcode: 100000,
    },
    autoFit: true,
    color: {
      field: 'value',
      value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: '#ccc',
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: '#000',
        opacity: 0.8,
        fontSize: 10,
        stroke: '#fff',
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    state: {
      active: {
        stroke: 'black',
        lineWidth: 1,
      },
    },
    tooltip: {
      items: ['name', 'adcode', 'value'],
    },
    legend: {
      position: 'bottomleft',
    },
  }
	return (
		<div style={{width: '100%', height: '500px'}}>
			<ChoroplethMap {...config} />
		</div>
	)
}

export default ChinaMap