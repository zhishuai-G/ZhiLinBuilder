import {  QRCode as ZLQRCode } from 'antd';

export default function QRCode(props: any) {
  const { value, size, color, bgColor, bordered, comStyle} = props
  return (
    <div>
      <ZLQRCode
        value={value || '-'}
        size={size}
        color={color}
        bgColor={bgColor}
        bordered={bordered}
        style={{...comStyle}}
      />
    </div>
  )
}