import { useState, useCallback, useEffect, useRef } from 'react';
import { Button } from 'antd';
import {
  SearchOutlined, CheckCircleTwoTone, CloseCircleTwoTone,
  ExclamationCircleTwoTone, BellTwoTone, CloseOutlined,
  CheckOutlined, LoadingOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

const ConfirmDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TextContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 0.88rem;
  user-select: none;
  line-height: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const InputEle = styled.input`
  flex: 1;
  color: #fff;
  border: none;
  outline: none;
  background: transparent;
  &:hover {
    overflow: visible;
    white-space: normal;
  }
`
const DynamicIslandWrapper = styled.div`
  position: relative;
  min-width: ${({ isExpand }) => (isExpand ? '320px' : '180px')};
  max-width: ${({ isExpand }) => (isExpand ? '320px' : '180px')};
  background: #1e293b;
  backdrop-filter: blur(10px);
  padding: 5px 10px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  color: #fff;
  gap: 10px;
  transition: all 0.28s ease-in-out;
  box-sizing: border-box;
  overflow: hidden;
`;

const iconMap = {
  search: <SearchOutlined />,
  success: <CheckCircleTwoTone twoToneColor="#52c41a" />,
  warning: <ExclamationCircleTwoTone twoToneColor="#faad14" />,
  error: <CloseCircleTwoTone twoToneColor="#ff4d4f" />,
  info: <CheckCircleTwoTone twoToneColor="#1890ff" />,
  notice: <BellTwoTone />,
  confirm: <ExclamationCircleTwoTone twoToneColor="#faad14" />,
  loading: <LoadingOutlined />
}

const DI_EVENT_KEY = 'di:event';
const dispatchCustomEvent = (type, options) => {
  const customEvent = new CustomEvent(DI_EVENT_KEY, {
    detail: { type, ...options },
  });
  window.dispatchEvent(customEvent);
};

export default function DynamicIsland() {
  const [isExpand, seIsExpand] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('search');
  const timeoutRef = useRef(null);
  const audioRef = useRef(null);

  function setInitalState() {
    setType('search')
    setMessage('')
    seIsExpand(false)
  }

  function changeContent(type, options) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setType(type)
    setMessage(options.message || '')
    seIsExpand(true)

    if (options.noClose) {
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setInitalState()
    }, options.duration || 2000);
  }

  const handleEvent = useCallback((e) => {
    const details = e.detail;

    if (details?.type === 'close') {
      setInitalState();
      return;
    }

    if(details && details.type && Object.keys(details).length > 0) {
      if (details.sound) {
        // 播放音频...
        audioRef.current?.play().catch(err => console.log('播放失败：', err))
      }

      changeContent(details.type, details);
    }
  }, [])

  useEffect(() => {
    audioRef.current = new Audio('/media/bone.mp3')
  }, [])

  useEffect(() => {
    window.addEventListener(DI_EVENT_KEY, handleEvent);
    return () => {
      window.removeEventListener(DI_EVENT_KEY, handleEvent)
    }
  }, [handleEvent])



  return (
    <DynamicIslandWrapper isExpand={isExpand} onClick={() => setInitalState()}>
      {iconMap[type]}
      {message ? (
        <TextContent>{ message }</TextContent>
      ) : (
        <InputEle
          onFocus={() => seIsExpand(true)}
          onBlur={() => seIsExpand(false)}
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </DynamicIslandWrapper>
  )
}

const renderConfirmButton = (options) => (
  <span>
    <Button
      ghost
      shape="circle"
      icon={<CloseOutlined style={{fontSize: '12px'}} />}
      size="small"
    />
    <Button
      ghost
      style={{marginLeft: '10px', color: '#fff', background: '#0958d9', borderColor: '#0958d9'}}
      type="primary"
      shape="circle"
      icon={<CheckOutlined style={{fontSize: '12px'}}/>}
      size="small"
      onClick={(e) => {
        let stopPropagation = options.stopPropagation ?? true;
        if (stopPropagation) {
          e.stopPropagation()
        }
        if (typeof options.onOk === 'function') {
          options.onOk()
        }
      }}
    />
  </span>
)
function createMessageHandler(type, defaultOptions, renderMsg) {
  return (message, options) => {
    dispatchCustomEvent(type, {
      message: renderMsg ? renderMsg(message, options) : message,
      ...defaultOptions,
      ...options
    })
  }
}

/**
 * 
 * @param {*} message 内容
 * @param {*} options {
 *   duration: 2000, // 持续时间
 *   sound: false, // 是否播放声音,
 *   noClose: false, // 不关闭
 *   stopPropagation: false, // 是否阻止冒泡
 * }
 */
DynamicIsland.close = createMessageHandler('close')
DynamicIsland.loading = createMessageHandler('loading', { noClose: true })
DynamicIsland.success = createMessageHandler('success')
DynamicIsland.warning = createMessageHandler('warning')
DynamicIsland.info = createMessageHandler('info')
DynamicIsland.notice = createMessageHandler('notice', { sound: true })
DynamicIsland.error = createMessageHandler('error', { sound: true },
  (msg) => (<span style={{ color: '#ff4d4f' }}>{msg}</span>)
)
DynamicIsland.confirm = createMessageHandler('confirm', { sound: true },
  (msg, options) => (
    <ConfirmDiv>
      <span>{msg}</span>
      {renderConfirmButton(options)}
    </ConfirmDiv>
  )
)
