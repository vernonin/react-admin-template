import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * 自定义 Hook 用于路由拦截
 * @param {Function} beforeEach - 路由变化前的回调函数
 * @param {Function} afterEach - 路由变化后的回调函数
 */
export default function useRouteInterceptor(beforeEach, afterEach) {
  const location = useLocation();  // 获取当前路由
  const navigationType = useNavigationType(); // (PUSH, REPLACE, POP)
  const prevLocation = useRef(location); // 记录上一次的 location
  
  useEffect(() => {
    if (location !== prevLocation.current) {
      // 调用路由变化前的回调函数
      if (typeof beforeEach === 'function') {
        beforeEach(prevLocation.current, navigationType);
      }

      // 更新当前的 location 作为下次的 "之前路由"
      prevLocation.current = location;
    }

    // 调用路由变化后的回调函数
    if (typeof afterEach === 'function') {
      afterEach(location, navigationType);
    }
    
  }, [location, navigationType, beforeEach, afterEach]);
}
