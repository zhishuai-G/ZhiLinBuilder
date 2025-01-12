import { QRCode as ZLQRCode } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface QRCodeProps extends BaseComponentProps {
  value?: string;
  icon?: string;
  size?: number;
  bordered?: boolean;
  errorLevel?: 'L' | 'M' | 'Q' | 'H';
}

export default function QRCode(props: QRCodeProps) {
  const { value, icon, size, bordered, errorLevel, comStyle } = props;

  return (
    <div>
      <ZLQRCode
        style={comStyle}
        value={value || 'https://ant.design/'}
        icon={icon}
        size={size}
        bordered={bordered}
        errorLevel={errorLevel}
      />
    </div>
  );
}