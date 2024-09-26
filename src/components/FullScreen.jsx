import { useState, useRef } from "react"
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons"
const FullScreen = ({ element, size }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const fallbackRef = useRef(document.documentElement)

  const toggleFullScreen = () => {
    console.log('element: ', element);
    const targetElement = element ?? fallbackRef.current;

    if (!isFullScreen) {
      // 进入全屏
      if (targetElement.requestFullscreen) {
        targetElement.requestFullscreen()
      }
      else if (targetElement.mozRequestFullScreen) {
        // Firefox
        targetElement.mozRequestFullScreen()
      }
      else if (targetElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        targetElement.webkitRequestFullscreen()
      }
      else if (targetElement.msRequestFullscreen) {
        // IE/Edge
        targetElement.msRequestFullscreen()
      }
      setIsFullScreen(true)
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      else if (document.mozCancelFullScreen) {
         // Firefox
        document.mozCancelFullScreen();
      }
      else if (document.webkitExitFullscreen) {
         // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        //  // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  }

  const styles = {
    fontSize: size || '16px'
  }

  return (
    <span onClick={toggleFullScreen}>
      {
        isFullScreen
          ? <FullscreenExitOutlined style={styles} />
          : <FullscreenOutlined style={styles} />
      }
    </span>
  );
}

export default FullScreen;
