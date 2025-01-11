import { useState, useEffect, ComponentType } from 'react';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

interface IconProps {
  rotate?: number;
  spin?: boolean;
  type?: string;
  comStyle?: React.CSSProperties;
}

export default function Icon(props: IconProps) {
  const { rotate, spin, type = "StepBackwardOutlined", comStyle = {} } = props;
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
      {IconComponent && <IconComponent style={comStyle} rotate={rotate} spin={spin} />}
    </div>
  );
}
