import { message } from 'antd';
import { useState, useEffect } from 'react';

const useVisibility = (defaultVisibility: boolean = true, key: string, showMessage: string) => {
  const [visible, setVisible] = useState(defaultVisibility); // 控制区域的显示与隐藏

  const toggleVisibility = () => {
    setVisible((prev: boolean) => {
      const newVisibility = !prev;
      message.info(`${showMessage} 已隐藏`); // 点击事件提示
      return newVisibility;
    })
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === key.toLowerCase()) {
        setVisible((prev: boolean) => {
          if (!prev) {
            message.info(`${showMessage} 已显示`); // 防止区域已经显示但是触发键盘事件，也会弹出提示
          }
          return true;  // 强制将 visible 设置为 true
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { visible, toggleVisibility };
};

export default useVisibility;
