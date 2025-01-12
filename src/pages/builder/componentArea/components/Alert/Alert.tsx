import { Alert as ZLAlert } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface AlertProps extends BaseComponentProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  showIcon?: boolean;
  description?: string;
}

export default function Alert(props: AlertProps) {
  const { type, message, showIcon, description, comStyle } = props;
  return (
    <div>
      <ZLAlert
        style={{ ...comStyle }}
        showIcon={showIcon}
        description={description}
        type={type || 'success'}
        message={message || 'Success Text'}
      />
    </div>
  );
}
