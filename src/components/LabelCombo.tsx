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

export interface LabelComboPropsType {
  label: string;
  subLabel?: string;
  status?: string;
  labelTextStyle?: TextStyleType;
  labelTextWeight?: TextWeightType;
  subLabelTextStyle?: TextStyleType;
  subLabelTextWeight?: TextWeightType;
}

const LabelCombo: React.FC<LabelComboPropsType> = ({
  label,
  subLabel,
  status,
  labelTextStyle = 'DEFAULT',
  labelTextWeight = 'MEDIUM',
  subLabelTextStyle = 'DEFAULT',
  subLabelTextWeight = 'NORMAL'
}) => {
  return (
    <div className='truncate pt-1'>
      {status === 'SUCCESS' ? (
        <Fragment>
          <p
            className={`overflow-hidden truncate whitespace-nowrap text-sm 
              ${textStyle[labelTextStyle]} ${textWeight[labelTextWeight]}
            `}
          >
            {label}
          </p>
          {subLabel || subLabel === '' ? (
            <p
              className={`text-xs text-gray-600  
                ${textStyle[subLabelTextStyle]} ${textWeight[subLabelTextWeight]}
              `}
            >
              {subLabel}
            </p>
          ) : null}
        </Fragment>
      ) : (
        <Fragment>
          <div className='h-3 w-4/5 animate-pulse rounded-full bg-gray-200' />
          <div className='mt-3 h-2 w-7/12 animate-pulse rounded-full  bg-gray-200' />
        </Fragment>
      )}
    </div>
  );
};

export default LabelCombo;
