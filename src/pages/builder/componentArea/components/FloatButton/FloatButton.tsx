import { FloatButton as ZLFloatButton } from 'antd';
import { useAntIcon } from '../../hooks/useAntIcon';
import { BaseIconComponentProps } from '../../../../../types/common';

interface FloatButtonProps extends BaseIconComponentProps {
  caption?: string;
  shape?: 'circle' | 'square';
}

export default function FloatButton(props: FloatButtonProps) {
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
