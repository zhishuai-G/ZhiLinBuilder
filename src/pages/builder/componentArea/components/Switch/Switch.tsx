import { Switch as ZLSwitch } from 'antd';

export default function Switch(props: any) {
  const { checkedChildren, unCheckedChildren, disabled, size } = props

  return (
    <div>
      <ZLSwitch
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        disabled={disabled}
        size={size}
      >
      </ZLSwitch>
    </div>
  )
}
