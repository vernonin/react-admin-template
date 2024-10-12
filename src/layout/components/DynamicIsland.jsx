import { useState, useMemo, useEffect, useRef } from 'react';
import {
  SearchOutlined, CheckCircleTwoTone, CloseCircleTwoTone,
  ExclamationCircleTwoTone, BellTwoTone, 
} from '@ant-design/icons'

const DI_EVENT_KEY = 'di:event';

const inputStyles = {
  flex: 1,
  border: 'none',
  outline: 'none',
  color: '#fff',
  background: 'transparent',
}

const contentStyles = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.96rem',
  userSelect: 'none',
  lineHeight: '1rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const iconMap = {
  search: <SearchOutlined />,
  success: <CheckCircleTwoTone twoToneColor="#52c41a" />,
  warning: <ExclamationCircleTwoTone twoToneColor="#faad14" />,
  error: <CloseCircleTwoTone twoToneColor="#ff4d4f" />,
  info: <CheckCircleTwoTone twoToneColor="#1890ff" />,
  notice: <BellTwoTone />
}

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

  const rootStyles = useMemo(() => {
    return {
      position: 'relative',
      minWidth: isExpand ? '320px' : '180px',
      maxWidth: isExpand ? '320px' : '180px',
      background: '#1e293b',
      backdropFilter: 'blur(10px)',
      padding: '5px 10px',
      height: '60%',
      borderRadius: '10px',
      display: 'flex',
      color: '#fff',
      gap: '10px',
      transition: 'all 0.28s ease-in-out',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }
  }, [isExpand])

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

    timeoutRef.current = setTimeout(() => {
      setInitalState()
    }, options.duration || 2000);
  }

  useEffect(() => {
    const handleEvent = (e) => {
      const details = e.detail;
      if(details && details.type && Object.keys(details).length > 0) {
        if (details.sound) {
          // 播放音频...
          const audio = new Audio('/media/bone.mp3');
          audio.play().catch(err => {
            console.log('播放失败：', err)
          })
        }

        changeContent(details.type, details);
      }
    }

    window.addEventListener(DI_EVENT_KEY, handleEvent);
    return () => {
      window.removeEventListener(DI_EVENT_KEY, handleEvent)
    }
  }, [])

  return (
    <div style={rootStyles} onClick={() => setInitalState()}>
      {iconMap[type]}
      {message ? (
        <div style={{...contentStyles, color: type === 'error' ? '#ff4d4f' : 'unset'}}>
          {message}
        </div>
      ) : (
        <input
          style={inputStyles}
          onFocus={() => seIsExpand(true)}
          onBlur={() => seIsExpand(false)}
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  )
}

/**
 * 
 * @param {*} message 内容
 * @param {*} options {
 *   duration: 2000, // 持续时间
 *   sound: false, // 是否播放声音
 * }
 */
DynamicIsland.success = (message, options) => {
  dispatchCustomEvent('success', { message, ...options });
};

DynamicIsland.warning = (message, options) => {
  dispatchCustomEvent('warning', { message, ...options });
};

DynamicIsland.error = (message, options) => {
  dispatchCustomEvent('error', { message, sound: true, ...options });
};

DynamicIsland.info = (message, options) => {
  dispatchCustomEvent('info', { message, ...options });
};

DynamicIsland.notice = (message, options) => {
  dispatchCustomEvent('notice', { message, sound: true, ...options });
};
