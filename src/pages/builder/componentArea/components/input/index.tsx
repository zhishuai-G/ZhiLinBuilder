import { Input as ZLInput } from 'antd';

function Input(props: any) {
  const { addonBefore, addonAfter, allowClear, defaultValue, value, disabled } = props

  return (
    <div>
      <ZLInput
        value={value || defaultValue}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        allowClear={allowClear}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  )
}

export default Input