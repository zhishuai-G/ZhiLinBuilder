import { ComponentType, useEffect, useState } from 'react'
import { FloatButton as ZLFloatButton } from 'antd';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

interface IconProps {
  rotate?: number;
  spin?: boolean;
  type?: string;
  comStyle?: React.CSSProperties;
}

export default function FloatButton(props: IconProps & { caption?: string; shape?: 'circle' | 'square' }) {
  const { caption, shape, type = "StepBackwardOutlined", comStyle } = props

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
