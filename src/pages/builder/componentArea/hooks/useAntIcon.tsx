import { useState, useEffect, ComponentType } from 'react';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

export function useAntIcon(type: string) {
  const [IconComponent, setIconComponent] = useState<ComponentType<AntdIconProps> | null>(null);

  useEffect(() => {
    const getIconComponent = async () => {
      const icons = await import("@ant-design/icons");
      const component = icons[type as keyof typeof icons] as ComponentType<AntdIconProps>;
      setIconComponent(component);
    };

    getIconComponent();
  }, [type]);

  return IconComponent;
} 