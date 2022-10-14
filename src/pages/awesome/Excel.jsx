import React, { useState, useEffect } from 'react'

import { Card, Table, Tag, Button, message  } from 'antd'
import '../../mock'
import axios from 'axios'
import exExcel from '../../utils/exExcel'

const columns = [
  {
    key: 'name',
    title: '姓名',
    dataIndex: 'name',
    id: 'name',
    align: 'center',
  },
  {
    key: 'sex',
    title: '性别',
    dataIndex: 'sex',
    id: 'sex',
    align: 'center',
    render: (text, record) => <span>{text}</span>,
  },
  {
    key: 'birthday',
    title: '出生日期',
    dataIndex: 'birthday',
    id: 'birthday',
    align: 'center',
  },
  {
    key: 'address',
    title: '地址',
    dataIndex: 'address',
    id: 'address',
    align: 'center',
  },
  
  {
    key: 'tag',
    title: '角色',
    dataIndex: 'tag',
    id: 'tag',
    align: 'center',
    render: text => (
      <Tag color={text === '管理员' ? 'green' : 'orange'}>{text}</Tag>
    )
  }
]

const Excel = () => {
  const [data, setData] = useState([])
  const [btnLaoding, setBtnLoading] = useState(false)

  // 导出Excel
  const exportExcel = async () => {
    setBtnLoading(true)
    try {
      // ['姓名', '性别', '出生日期', '地址', '角色']
      const header = columns.map(user => user.title)

      const filter = ['name', 'sex', 'birthday', 'address', 'tag']

      await exExcel('用户表', header, filter, data)
    }
    catch {
      message.error('导出失败！')
    }
    setBtnLoading(false)
  }

  const importExcel = () => {
    console.log('import')
  }

  const fetchData = async () => {
    let { data: { list } } = await axios.get('/mock/excel')

    let users = list.map(item => ({...item, key: item.id}))

    setData(users)
  }

  useEffect(() => {
    fetchData()
  }, [])

	return (
		<div>
      <Card title={(
        <>
          <Button loading={btnLaoding} onClick={exportExcel} type="primary">导出Excel</Button>
          <Button style={{marginLeft: '12px'}} onClick={importExcel} type="primary">导入Excel</Button>
        </>
      )} bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
	)
}

export default Excel