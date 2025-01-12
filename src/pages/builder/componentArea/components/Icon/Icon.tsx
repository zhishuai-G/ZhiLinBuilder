import { BaseIconComponentProps } from '../../../../../types/common';
import { useAntIcon } from '../../hooks/useAntIcon';

export default function Icon(props: BaseIconComponentProps) {
  const { rotate, spin, type = "StepBackwardOutlined", comStyle = {} } = props;
  const IconComponent = useAntIcon(type);

  return (
    <div>
      {IconComponent && <IconComponent style={comStyle} rotate={rotate} spin={spin} />}
    </div>
  );
}
