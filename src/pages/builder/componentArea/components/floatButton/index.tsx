import { ComponentType, useEffect, useState } from 'react'
import { FloatButton as ZLFloatButton } from 'antd';

export default function FloatButton(props: any) {
  const { caption, shape, type = "StepBackwardOutlined", comStyle } = props

  const [IconComponent, setIconComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    const getIconComponent = async () => {
      const icons: { [key: string]: ComponentType<any> } = await import("@ant-design/icons");
      const component = icons[type];
      setIconComponent(component);
    };

    getIconComponent();
  }, [type]);
  return (
    <div>
      <ZLFloatButton
        style={{ position: 'absolute', ...comStyle }}
        shape={shape}
        icon={type ? IconComponent && <IconComponent /> : null}
      >
        {caption || '按钮'}
      </ZLFloatButton>
    </div>
  )
}
