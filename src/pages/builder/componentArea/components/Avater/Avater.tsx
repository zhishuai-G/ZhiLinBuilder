import { ComponentType, useEffect, useState } from 'react';
import { Avatar as ZLAvatar } from 'antd'

export default function Avatar(props: any) {
  const { src, shape, size, type = "StepBackwardOutlined", comStyle } = props

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
      <ZLAvatar
        size={size || 40}
        icon={type ? IconComponent && <IconComponent /> : null}
        src={src}
        shape={shape}
        style={{ ...comStyle }}
      >
      </ZLAvatar>
    </div>
  )
}
