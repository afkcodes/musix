import { Fragment } from 'react';

type TextWeightType = 'NORMAL' | 'MEDIUM' | 'SEMI_BOLD' | 'BOLD';
const textWeight: {
  [key in TextWeightType]: string;
} = {
  NORMAL: 'font-normal',
  MEDIUM: 'font-medium',
  SEMI_BOLD: 'font-semibold',
  BOLD: 'font-bold'
};

type TextStyleType = 'DEFAULT' | 'UNDERLINED' | 'ITALICS';
const textStyle: {
  [key in TextStyleType]: string;
} = {
  DEFAULT: 'no-underline',
  UNDERLINED: 'underline',
  ITALICS: 'italic'
};

type HrefTargetType = 'SELF' | 'BLANK' | 'PARENT' | 'TOP';
const hrefTarget: {
  [key in HrefTargetType]: string;
} = {
  SELF: '_self',
  BLANK: '_blank',
  PARENT: '_parent',
  TOP: '_top'
};

export interface LabelComboPropsType {
  label: string;
  subLabel?: string;
  status?: string;
  labelTextStyle?: TextStyleType;
  labelTextWeight?: TextWeightType;
  subLabelTextStyle?: TextStyleType;
  subLabelTextWeight?: TextWeightType;
  subLabelType?: 'TEXT' | 'LINK';
  subLabelHref?: string;
  target?: HrefTargetType;
}

const LabelCombo: React.FC<LabelComboPropsType> = ({
  label,
  subLabel,
  status,
  subLabelHref,
  labelTextStyle = 'DEFAULT',
  labelTextWeight = 'MEDIUM',
  subLabelTextStyle = 'DEFAULT',
  subLabelTextWeight = 'NORMAL',
  subLabelType = 'TEXT',
  target = 'BLANK'
}) => {
  return (
    <div className='truncate pt-1'>
      {status === 'SUCCESS' ? (
        <Fragment>
          <p
            className={`overflow-hidden truncate whitespace-nowrap text-sm text-gray-300
              ${textStyle[labelTextStyle]} ${textWeight[labelTextWeight]}
            `}
          >
            {label}
          </p>
          {subLabel && subLabelType === 'TEXT' && subLabel !== '' ? (
            <p
              className={`text-xs text-gray-400  
                ${textStyle[subLabelTextStyle]} ${textWeight[subLabelTextWeight]}
              `}
            >
              {subLabel}
            </p>
          ) : (
            <a
              className={`text-xs text-gray-400
                ${textStyle[subLabelTextStyle]} ${textWeight[subLabelTextWeight]}
              `}
              href={subLabelHref}
              target={hrefTarget[target]}
            >
              {subLabel}
            </a>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <div className='mt-2 h-3 w-4/5 animate-pulse rounded-full bg-gray-200' />
          <div className='mt-2 h-2 w-7/12 animate-pulse rounded-full  bg-gray-200' />
        </Fragment>
      )}
    </div>
  );
};

export default LabelCombo;
