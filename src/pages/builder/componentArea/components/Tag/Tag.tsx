import { Tag as ZLTag } from 'antd';

export default function Tag(props: any) {
  const { color, bordered, caption, comStyle = {} } = props
  return (
    <div>
      <ZLTag
        color={color}
        bordered={bordered}
        style={{ ...comStyle }}
      >
        {caption || '标签'}
      </ZLTag>
    </div>
  )
}