import { useState } from 'react';
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
}
const FigureLabel: React.FC<FigureLabelPropsType> = ({
  imageConfig,
  labelConfig,
  size = 'MD',
  labelPosition = 'LEFT'
}) => {
  const [status, setStatus] = useState<string>('LOADING');
  return (
    <div
      className={`group relative cursor-pointer duration-200 active:scale-[0.99]
        ${sizeMap[size]} ${labelPositionMap[labelPosition]}
      `}
      role='button'
    >
      <Figure {...imageConfig} onLoad={setStatus} />
      <LabelCombo {...labelConfig} status={status} />
    </div>
  );
};

export default FigureLabel;
