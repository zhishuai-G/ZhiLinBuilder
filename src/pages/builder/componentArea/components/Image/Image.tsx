import { Image as ZLImage } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface ImageProps extends BaseComponentProps {
  alt?: string;
  src?: string;
}

export default function Image(props: ImageProps) {
  const { alt, src, comStyle } = props;
  return (
    <div>
      <ZLImage
        width={comStyle?.width || 200}
        style={{ ...comStyle }}
        alt={alt}
        src={src || "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
      />
    </div>
  );
}