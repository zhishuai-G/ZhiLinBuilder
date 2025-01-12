import React from 'react';
import { Card as ZLCard } from 'antd';
import { BaseCaptionComponentProps } from '../../../../../types/common';

interface CardProps extends BaseCaptionComponentProps {
  children?: React.ReactNode[];
  hoverable?: boolean;
  size?: 'default' | 'small';
}

export default function Card(props: CardProps) {
  const { children, caption, hoverable, size, comStyle = {} } = props;
  
  return (
    <div>
      <ZLCard 
        style={{width: '400px', height: '400px', ...comStyle}}
        title={caption || '默认卡片'}
        hoverable={hoverable}
        size={size}
      >
        {children?.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
      </ZLCard>
    </div>
  );
}
