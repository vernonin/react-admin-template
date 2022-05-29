import React, { forwardRef } from "react";
import { Form, Input, Select, DatePicker, Switch } from 'antd';

const dateFormat = 'YYYY-MM-DD'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
}

const UserFrom = prop => {

	const { forwardRef } = prop


	/* eslint-disable no-template-curly-in-string */
	const validateMessages = {
		required: '请输入${label}',
	};

	const onFinish = values => {
		prop.onSubmit(values)
  }

	return (
		<Form 
      ref={forwardRef} 
      {...layout} 
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={'name'}
        label="姓名"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
			<Form.Item name={'sex'} label="性别" rules={[{required: true}]}>
				<Select>
          <Select.Option value="男">男</Select.Option>
          <Select.Option value="女">女</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={'birthday'}
        label="出生日期"
				rules={[{required: true}]}
      >
        <DatePicker format={dateFormat} style={{width: '100%'}}/>
      </Form.Item>
      <Form.Item name={'phone'} label="电话号码" rules={[{required: true}]}>
        <Input />
      </Form.Item>
			<Form.Item name={'address'} label="家庭地址" rules={[{required: true}]}>
        <Input />
      </Form.Item>
      <Form.Item name={'interest'} label="兴趣爱好">
        <Input.TextArea />
      </Form.Item>
			<Form.Item name={'tag'} label="是否为管理员" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
	)
}

export default forwardRef((prop, ref) => <UserFrom {...prop} forwardRef={ref} />)