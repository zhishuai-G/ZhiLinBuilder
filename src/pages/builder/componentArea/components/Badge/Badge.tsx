import { Badge as ZLBadge } from 'antd';

export default function Badge(props: any) {
  const { children, color, dot, size, count } = props

  return (
    <div style={{ width: '400px', height: '400px', border: '1px solid green' }}>
      {
        children && children.map((item: any) => {
          return (
            <div>
              <ZLBadge color={color} dot={dot} size={size} count={count || 1}>
                {item}
              </ZLBadge>
            </div>
          )
        })
      }
    </div>
  )
}
