import React, { useState, useEffect } from 'react'

import { UploadOutlined } from '@ant-design/icons';
import { Card, Table, Tag, Modal, Button,Upload, message  } from 'antd'
import '../../mock'
import axios from 'axios'
import { importExcel, downloadExcel } from '../../utils/handleXlsx';


const dataMap = {
  '姓名': 'name',
  '性别': 'sex',
  '地址': 'address',
  '角色': 'tag',
  '出生日期': 'birthday'
} 

const uploadStyled = {
  width: '400px',
  height: '140px',
  margin: '0 auto',
  border: '1px dashed pink',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}

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
  const [modalOpen, setModalOpen] = useState(false)
  const [btnLaoding, setBtnLoading] = useState(false)

  // 导出Excel
  const exportExcel = async () => {

    

    setBtnLoading(true)
    try {
      await downloadExcel('用户表', data)
    }
    catch {
      message.error('导出失败！')
    }
    setBtnLoading(false)
  }

  const fetchData = async () => {
    let { data: { list } } = await axios.get('/mock/excel')

    let users = list.map(item => ({...item, key: item.id}))

    setData(users)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const props = {
    beforeUpload: (file) => {
      handleOk(file)
      return false;
    },
  }

  // 姓名：张三  =>  name: 张三，
  const jsonData = (data) => {
    return data.map(item => {
      let obj = {}

      for (let k in item) {
        obj[dataMap[k]] = item[k]
      }

      return obj
    })
  }

  const handleOk = async (file) => {
    const result = await importExcel(file)

    const data = jsonData(result)

    setData(data.map(i => {
      i.key = parseInt(Math.random() * 1000)

      return i
    }))

    setModalOpen(false)
  }

	return (
		<>
      <Card title={(
        <>
          <Button loading={btnLaoding} onClick={exportExcel} type="primary">导出Excel</Button>
          <Button style={{marginLeft: '12px'}} onClick={() => setModalOpen(true)} type="primary">导入Excel</Button>
        </>
      )} bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>

      <Modal width="440px" title="上传Excel" visible={modalOpen} onOk={handleOk} onCancel={() => setModalOpen(false)}>
          <Upload {...props}>
        <div style={uploadStyled}>
            <UploadOutlined style={{fontSize: '30px'}} />
        </div>
          </Upload>
      </Modal>
    </>
	)
}

export default Excel