import { Avatar as ZLAvatar } from 'antd'
import { useAntIcon } from '../../hooks/useAntIcon';

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
  const { src, shape, size, type = "StepBackwardOutlined", comStyle } = props;
  const IconComponent = useAntIcon(type);

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
  );
}
