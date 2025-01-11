import { ComponentType, useEffect, useState } from 'react';
import { Avatar as ZLAvatar } from 'antd'
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

interface IconProps {
  rotate?: number;
  spin?: boolean;
  type?: string;
  comStyle?: React.CSSProperties;
  src?: string;
  shape?: 'circle' | 'square'
  size?: number
}


export default function Avatar(props: IconProps) {
  const { src, shape, size, type = "StepBackwardOutlined", comStyle } = props

  const [IconComponent, setIconComponent] = useState<ComponentType<AntdIconProps> | null>(null);

  useEffect(() => {
    const getIconComponent = async () => {
      const icons = await import("@ant-design/icons");
      const component = icons[type as keyof typeof icons] as ComponentType<AntdIconProps>;
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
