import { Progress as ZLProgress } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface ProgressProps extends BaseComponentProps {
  percent?: number;
  showInfo?: boolean;
  status?: 'success' | 'exception' | 'normal' | 'active';
  strokeLinecap?: 'round' | 'square' | 'butt';
  type?: 'line' | 'circle' | 'dashboard';
  size?: 'default' | 'small';
}

export default function Progress(props: ProgressProps) {
  const { percent, showInfo, status, strokeLinecap, type, size, comStyle } = props;

  return (
    <div>
      <ZLProgress
        style={comStyle}
        percent={percent || 0}
        showInfo={showInfo}
        status={status}
        strokeLinecap={strokeLinecap}
        type={type}
        size={size}
      />
    </div>
  );
}