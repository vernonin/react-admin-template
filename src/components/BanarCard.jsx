import React from 'react';

import { Tooltip, Card  } from 'antd';
import styled from 'styled-components'
import { theme } from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';

const TitleStyle = styled.div`
	color: #999;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	justify-content: space-between;
`
const ValueStyle = styled.div`
	font-size: 30px;
	font-weight: 600;
`
const FooterStyle = styled.div`
	font-size: 14px;
	line-height: 34px;
	border-top: 1px solid #eee;
`

const BanarCard = props => {
  const { title, subtitle, value, subvalue, children } = props
  const { token: { colorBgBlur } } = theme.useToken()

  return (
    <>
      <Card
        styles={{
          body: {paddingBottom: '6px'}
        }}
      >
        <TitleStyle>
          <span>{ title }</span>
          <Tooltip title="你好呀！">
            <QuestionCircleOutlined />
          </Tooltip>
        </TitleStyle>
        <ValueStyle>{ value }</ValueStyle>
        <div style={{height: '44px', overflow: 'hidden'}}>
          { children }
        </div>
        <FooterStyle>{ subtitle }&nbsp;&nbsp;{ subvalue }</FooterStyle>
      </Card>
    </>
  )
}

export default BanarCard