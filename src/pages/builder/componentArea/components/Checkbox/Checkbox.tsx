import { Checkbox as ZLCheckbox } from 'antd';
import { BaseCaptionComponentProps } from '../../../../../types/common';

interface CheckboxProps extends BaseCaptionComponentProps {
  disabled?: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  const { caption, disabled } = props;

  return (
    <div>
      <ZLCheckbox disabled={disabled}>
        {caption || "多选"}
      </ZLCheckbox>
    </div>
  );
}
