import { Switch as ZLSwitch } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface SwitchProps extends BaseComponentProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: 'default' | 'small';
}

export default function Switch(props: SwitchProps) {
  const { checked, defaultChecked, disabled, loading, size, comStyle } = props;

  return (
    <div>
      <ZLSwitch
        style={comStyle}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        loading={loading}
        size={size}
      />
    </div>
  );
}
