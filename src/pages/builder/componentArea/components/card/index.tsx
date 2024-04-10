import { Card as ZLCard } from 'antd';

export default function Card(props: any) {
  
  const { children, caption, hoverable, size, comStyle = {} } = props
  
  return (
    <div>
      <ZLCard 
        style={{width: '400px', height: '400px', ...comStyle}}
        title={caption || '默认卡片'}
        hoverable={hoverable}
        size={size}
      >
        {
          children && children.map((item: any) => {
            return item
          })
        }
      </ZLCard>
    </div>
  )
}
