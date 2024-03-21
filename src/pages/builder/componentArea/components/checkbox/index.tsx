import { Checkbox as ZLCheckbox } from 'antd';

export default function Checkbox(props: any) {
  const { caption, disabled } = props

  return (
    <div>
      <ZLCheckbox
        disabled={disabled}
      >
        {caption || "多选"}
      </ZLCheckbox>
    </div>
  )
}
