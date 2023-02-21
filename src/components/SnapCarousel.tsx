type CarouselType = 'DEFAULT' | 'FLOW';
const CarouselStyleMap: {
  [key in CarouselType]: string;
} = {
  DEFAULT: 'flex snap-x snap-proximity',
  FLOW: 'grid snap-x snap-proximity grid-flow-col grid-rows-2 gap-y-4 '
};

interface SnapCarouselPropsType {
  children: React.ReactNode;
  type: CarouselType;
  shouldSnap?: boolean;
}
const SnapCarousel: React.FC<SnapCarouselPropsType> = ({
  children,
  type = 'DEFAULT',
  shouldSnap = false
}) => {
  return <ul className={CarouselStyleMap[type]}>{children}</ul>;
};

export default SnapCarousel;
