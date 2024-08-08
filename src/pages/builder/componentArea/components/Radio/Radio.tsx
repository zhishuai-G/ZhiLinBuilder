import { Radio as ZLRadio } from 'antd';

export default function Radio(props: any) {
  const { caption, disabled } = props
  return (
    <div>
      <ZLRadio
        disabled={disabled}
      >
        {caption || "单选"}
      </ZLRadio>
    </div>
  )
}
