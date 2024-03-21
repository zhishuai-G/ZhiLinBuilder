import { Rate as ZLRate } from 'antd';
import { useState } from 'react';

export default function Rate(props: any) {
  const { allowClear, allowHalf, count, disabled } = props
  return (
    <div>
      <ZLRate
        allowClear={allowClear}
        allowHalf={allowHalf}
        count={count}
        disabled={disabled}
      >
      </ZLRate>
    </div>
  )
}
