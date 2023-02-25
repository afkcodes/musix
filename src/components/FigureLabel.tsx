import { useState } from 'react';
import ActionRowContainer from './ActionRowContainer';
import Figure, { FigurePropsType } from './Figure';
import LabelCombo, { LabelComboPropsType } from './LabelCombo';

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
  XXXS: 'h-auto w-8',
  XXS: 'h-auto w-12',
  XS: 'h-auto w-16',
  SM: 'h-auto w-20',
  MD: 'h-auto w-24',
  LG: 'h-auto w-28',
  XL: 'h-auto w-32',
  XXL: 'h-auto w-36',
  XXXL: 'h-auto w-40',
  FREE: 'h-full w-full'
};

type LabelPositionType = 'CENTER' | 'LEFT';
const labelPositionMap: { [key in LabelPositionType]: string } = {
  CENTER: 'text-center',
  LEFT: 'text-left'
};

interface FigureLabelPropsType {
  imageConfig: FigurePropsType;
  labelConfig: LabelComboPropsType;
  size?: SizeType;
  labelPosition?: LabelPositionType;
  orientation?: 'VERTICAL' | 'HORIZONTAL';
}
const FigureLabel: React.FC<FigureLabelPropsType> = ({
  imageConfig,
  labelConfig,
  size = 'MD',
  labelPosition = 'LEFT',
  orientation = 'HORIZONTAL'
}) => {
  const [status, setStatus] = useState<string>('LOADING');
  const isHorizontal = orientation === 'HORIZONTAL';
  return (
    <div
      className={`group relative cursor-pointer
        ${labelPositionMap[labelPosition]}
        ${isHorizontal ? 'w-screen md:w-80' : sizeMap[size]}
      `}
      role='button'
    >
      <div className={`${isHorizontal ? 'flex justify-between' : ''}`}>
        <div className='shrink-0'>
          <Figure {...imageConfig} onLoad={setStatus} />
        </div>
        <div className={`${isHorizontal ? 'group mx-2 flex flex-1' : ''}`}>
          <div className={`${isHorizontal ? 'w-40 flex-1' : ''}`}>
            <LabelCombo {...labelConfig} status={status} target='BLANK' />
          </div>
          {isHorizontal ? <ActionRowContainer /> : null}
        </div>
      </div>
    </div>
  );
};

export default FigureLabel;
