import { useState, useEffect, ComponentType } from 'react';

export default function Icon(props: any) {
  let { rotate, spin, type = "StepBackwardOutlined" } = props;
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
      {IconComponent && <IconComponent rotate={rotate} spin={spin} />}
    </div>
  );
}
