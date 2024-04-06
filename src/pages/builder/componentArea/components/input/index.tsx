import { Input as ZLInput } from 'antd';

function Input(props: any) {
  const { addonBefore, addonAfter, allowClear, defaultValue, value, disabled, comStyle = {} } = props

  return (
    <div>
      <ZLInput
        style={comStyle}
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