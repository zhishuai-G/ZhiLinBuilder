import { Image as ZLImage } from 'antd';

export default function Image(props: any) {
  const { alt, src, comStyle } = props
  return (
    <div>
      <ZLImage
        width={comStyle?.width || 200}
        style={{ ...comStyle }}
        alt={alt}
        src={src || "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
      />
    </div>
  )
}