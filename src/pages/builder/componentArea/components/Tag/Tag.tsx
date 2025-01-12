import { Tag as ZLTag } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface TagProps extends BaseComponentProps {
  color?: string;
  closable?: boolean;
  bordered?: boolean;
  icon?: React.ReactNode;
  text?: string;
}

export default function Tag(props: TagProps) {
  const { color, closable, bordered, icon, text, comStyle } = props;

  return (
    <div>
      <ZLTag
        style={comStyle}
        color={color}
        closable={closable}
        bordered={bordered}
        icon={icon}
      >
        {text || 'Tag'}
      </ZLTag>
    </div>
  );
}