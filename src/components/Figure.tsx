import { Dispatch, SetStateAction } from 'react';
import { FallbackImage } from './FallbackImage';

type SizeType =
  | 'XXXS'
  | 'XXS'
  | 'XS'
  | 'SM'
  | 'MD'
  | 'LG'
  | 'XL'
  | 'XXL'
  | 'XXXL'
  | 'FREE';

const sizeMap: {
  [key in SizeType]: string;
} = {
  XXXS: 'h-8 w-8',
  XXS: 'h-12 w-12',
  XS: 'h-16 w-16',
  SM: 'h-20 w-20',
  MD: 'h-24 w-24',
  LG: 'h-28 w-28',
  XL: 'h-32 w-32',
  XXL: 'h-36 w-36',
  XXXL: 'h-40 w-40',
  FREE: 'h-full w-full'
};

type ShapeStyleType = 'DEFAULT' | 'ROUNDED_SQUARE' | 'CIRCLE' | 'TEAR_DROP';
const shapeStyleMap: {
  [key in ShapeStyleType]: string;
} = {
  DEFAULT: 'overflow-hidden rounded-none',
  ROUNDED_SQUARE: 'overflow-hidden rounded',
  CIRCLE: 'overflow-hidden rounded-full',
  TEAR_DROP: ''
};

type FitStrategyType = 'DEFAULT' | 'FILL' | 'CONTAIN' | 'COVER' | 'SCALE_DOWN';
const fitStrategy: {
  [key in FitStrategyType]: string;
} = {
  DEFAULT: 'object-none',
  FILL: 'object-fill',
  CONTAIN: 'object-contain',
  COVER: 'object-cover',
  SCALE_DOWN: 'object-scale-down'
};

type LoadStrategyType = 'EAGER' | 'LAZY';
const loadStrategy: { [key in LoadStrategyType]: string } = {
  EAGER: 'eager',
  LAZY: 'lazy'
};

type ArrangeModeType = 'SINGLE' | 'MULTI';
const arrangeMode: { [key in ArrangeModeType]: string } = {
  SINGLE: 'SINGLE',
  MULTI: 'MULTI'
};

export interface FigurePropsType {
  source: string;
  altText: string;
  progressiveImageSource: string;
  shape?: ShapeStyleType;
  size?: SizeType;
  imageFitStrategy?: FitStrategyType;
  loadingStrategy?: LoadStrategyType;
  mode?: ArrangeModeType;
  onLoad?: Dispatch<SetStateAction<string>>;
}

const Figure: React.FC<FigurePropsType> = ({
  source,
  altText,
  progressiveImageSource,
  shape = 'DEFAULT',
  size = 'MD',
  imageFitStrategy = 'COVER',
  loadingStrategy = 'LAZY',
  mode = 'SINGLE',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLoad = () => {}
}) => {
  return (
    <figure
      className={`${sizeMap[size]} ${shapeStyleMap[shape]} group pointer-events-none relative`}
      tabIndex={0}
    >
      <div className='absolute z-10 h-full w-full opacity-0 transition-all duration-200 group-active:bg-black group-active:opacity-40' />
      {arrangeMode[mode] === 'SINGLE' ? (
        <FallbackImage
          source={source}
          alt={altText}
          fitStrategy={fitStrategy[imageFitStrategy]}
          loadingStrategy={loadStrategy[loadingStrategy]}
          progressiveImageSource={progressiveImageSource}
          onLoad={onLoad}
        />
      ) : (
        <div
          className={`flex h-full w-full flex-wrap  ${shapeStyleMap.ROUNDED_SQUARE}`}
        >
          <div className='m-0 h-1/2 w-1/2 p-0'>
            <FallbackImage
              source={source}
              alt='Elephant at sunset'
              fitStrategy={fitStrategy.COVER}
              loadingStrategy={loadStrategy.LAZY}
            />
          </div>
          <div className='m-0 h-1/2 w-1/2 p-0'>
            <FallbackImage
              source={source}
              alt='Elephant at sunset'
              fitStrategy={fitStrategy.COVER}
              loadingStrategy={loadStrategy.LAZY}
            />
          </div>
          <div className='m-0 h-1/2 w-1/2 p-0'>
            <FallbackImage
              source={source}
              alt='Elephant at sunset'
              fitStrategy={fitStrategy.COVER}
              loadingStrategy={loadStrategy.LAZY}
            />
          </div>
          <div className='m-0 h-1/2 w-1/2 p-0'>
            <FallbackImage
              source={source}
              alt='Elephant at sunset'
              fitStrategy={fitStrategy.COVER}
              loadingStrategy={loadStrategy.LAZY}
            />
          </div>
        </div>
      )}
    </figure>
  );
};

export default Figure;
