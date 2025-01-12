import { Carousel as ZLCarousel } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface CarouselProps extends BaseComponentProps {
  children?: React.ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  dotPosition?: 'top' | 'bottom' | 'left' | 'right';
  fade?: boolean;
}

export default function Carousel(props: CarouselProps) {
  const { children, autoplay, autoplaySpeed, dotPosition, fade, comStyle } = props;

  return (
    <div>
      <ZLCarousel
        style={{ width: '400px', height: '300px', border: '1px solid blue', ...comStyle }}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed || 3000}
        dotPosition={dotPosition}
        fade={fade}
      >
        {children?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </ZLCarousel>
    </div>
  );
}
