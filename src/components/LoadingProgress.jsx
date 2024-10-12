
import { useState, useEffect } from 'react'
import { Progress } from 'antd'

export default function LoadingProgress({ isCompleted, size = 'small', ...props }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId;

    if (!isCompleted) {
      intervalId = setInterval(() => {
        setProgress(prev => {
          const nextProgress = Math.floor(prev + Math.random() * 10); // 每次增加一个小的随机值
          return nextProgress >= 99 ? 99 : nextProgress; // 当接近 100 时，保持在 99 以下
        });
      }, 100);
    } else {
      setProgress(100);
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId);
  }, [isCompleted])

  return (
    <Progress percent={progress} size={size} type="circle"  {...props} />
  )
}
