import { Rate as ZLRate } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface RateProps extends BaseComponentProps {
  allowClear?: boolean;
  allowHalf?: boolean;
  count?: number;
  defaultValue?: number;
  disabled?: boolean;
}

export default function Rate(props: RateProps) {
  const { allowClear, allowHalf, count, defaultValue, disabled, comStyle } = props;

  return (
    <div>
      <ZLRate
        style={comStyle}
        allowClear={allowClear}
        allowHalf={allowHalf}
        count={count}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
}
