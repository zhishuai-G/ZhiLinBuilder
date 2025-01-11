import { useAntIcon } from '../../hooks/useAntIcon';

interface IconProps {
  rotate?: number;
  spin?: boolean;
  type?: string;
  comStyle?: React.CSSProperties;
}

export default function Icon(props: IconProps) {
  const { rotate, spin, type = "StepBackwardOutlined", comStyle = {} } = props;
  const IconComponent = useAntIcon(type);

  return (
    <div>
      {IconComponent && <IconComponent style={comStyle} rotate={rotate} spin={spin} />}
    </div>
  );
}
