import { FloatButton as ZLFloatButton } from 'antd';
import { useAntIcon } from '../../hooks/useAntIcon';

interface IconProps {
  rotate?: number;
  spin?: boolean;
  type?: string;
  comStyle?: React.CSSProperties;
}

export default function FloatButton(props: IconProps & { caption?: string; shape?: 'circle' | 'square' }) {
  const { caption, shape, type = "StepBackwardOutlined", comStyle } = props;
  const IconComponent = useAntIcon(type);

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
  );
}
