import { Radio as ZLRadio } from 'antd';
import { BaseCaptionComponentProps } from '../../../../../types/common';

interface RadioProps extends BaseCaptionComponentProps {
  disabled?: boolean;
  value?: string | number;
  defaultChecked?: boolean;
}

export default function Radio(props: RadioProps) {
  const { caption, disabled, value, defaultChecked, comStyle } = props;
  
  return (
    <div>
      <ZLRadio
        disabled={disabled}
        value={value}
        defaultChecked={defaultChecked}
        style={comStyle}
      >
        {caption || "单选"}
      </ZLRadio>
    </div>
  );
}
