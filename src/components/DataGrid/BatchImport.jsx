import React from 'react'
import { Button, Divider, Modal, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import DynamicIsland from '../../layout/components/DynamicIsland';
import { importExcel } from '../../utils/handleXlsx'

export default function BatchImport({ open, onClose }) {

  const props = {
    name: 'file',
    multiple: true,
    async beforeUpload(file) {
      console.log('文件上传中:', file)
      const fads = await importExcel(file);

      console.log(fads)

      return false;
    },
    onChange(info) { // 上传中、完成、失败都会调用这个函数。
      const { status } = info.file;
      if (status === 'uploading') {
        console.log('上次中:', info.file, info.fileList)
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        DynamicIsland.success(`${info.file.name} 上次成功！`);
      } else if (status === 'error') {
        DynamicIsland.error(`${info.file.name} 上次失败！`);
      }
      if (status === 'removed') {
        DynamicIsland.info(`${info.file.name} 已删除！`);
      }
    },
    onDrop(e) {
      console.log('文件被拖入:', e.dataTransfer.files);
    },
  }

  return (
    <Modal title="批量导入" open={open} onCancel={onClose}>
      <Button block>下载模板</Button>
      <Divider style={{margin: '10px 0'}} />
      <Upload.Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">单击或拖动文件到此区域进行上传</p>
        <p className="ant-upload-hint">
          支持单次或批量上传。严禁上传公司敏感数据或其他被禁止的文件。
        </p>
      </Upload.Dragger>
    </Modal>
  )
}
