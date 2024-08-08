import { useState, useEffect, ComponentType } from 'react';

export default function Icon(props: any) {
  let { rotate, spin, type = "StepBackwardOutlined", comStyle = {} } = props;
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
      {IconComponent && <IconComponent style={comStyle} rotate={rotate} spin={spin} />}
    </div>
  );
}
