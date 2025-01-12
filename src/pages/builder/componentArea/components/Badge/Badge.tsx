import { Badge as ZLBadge } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface BadgeProps extends BaseComponentProps {
  children?: React.ReactNode[];
  color?: string;
  dot?: boolean;
  size?: 'default' | 'small';
  count?: number;
}

export default function Badge(props: BadgeProps) {
  const { children, color, dot, size, count } = props;

  return (
    <div style={{ width: '400px', height: '400px', border: '1px solid green' }}>
      {children?.map((item, index) => (
        <div key={index}>
          <ZLBadge 
            color={color} 
            dot={dot} 
            size={size} 
            count={count || 1}
          >
            {item}
          </ZLBadge>
        </div>
      ))}
    </div>
  );
}
