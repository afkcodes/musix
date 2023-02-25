import { ReactElement } from 'react';

type ButtonStyleType = 'PRIMARY' | 'OUTLINE' | 'GHOST' | 'LINK' | 'ICON';

const buttonStyle: {
  [key in ButtonStyleType]: string;
} = {
  PRIMARY: 'bg-[#d80000] active:bg-red-700 text-white',
  OUTLINE:
    'border border-[#d80000] active:border-red-700 text-[#d80000] active:text-red-700',
  GHOST: 'bg-none hover:bg-[#d8000025] active:bg-[#d8000035] text-[#d80000]',
  LINK: '',
  ICON: 'outline-none text-white p-2 '
};

type ButtonStyleShapeType =
  | 'DEFAULT'
  | 'ROUNDED_EDGE'
  | 'ROUNDED_FULL'
  | 'CIRCLE'
  | 'UNSTYLED';
const buttonStyleShape: {
  [key in ButtonStyleShapeType]: string;
} = {
  DEFAULT: 'rounded-none px-4 py-2',
  ROUNDED_EDGE: 'rounded px-4 py-2',
  ROUNDED_FULL: 'rounded-full px-4 py-2',
  CIRCLE: 'rounded-full',
  UNSTYLED: ''
};

type ButtonTextWeightType = 'NORMAL' | 'MEDIUM' | 'SEMI_BOLD' | 'BOLD';
const buttonTextWeight: {
  [key in ButtonTextWeightType]: string;
} = {
  NORMAL: 'font-normal',
  MEDIUM: 'font-medium',
  SEMI_BOLD: 'font-semibold',
  BOLD: 'font-bold'
};

type ButtonTextStyleType = 'DEFAULT' | 'UNDERLINED' | 'ITALICS';
const buttonTextStyle: {
  [key in ButtonTextStyleType]: string;
} = {
  DEFAULT: 'no-underline',
  UNDERLINED: 'underline',
  ITALICS: 'italic'
};

type IconPosition = 'LEFT' | 'RIGHT' | 'CENTER';
const IconPositionStyle: { [key in IconPosition]: string } = {
  LEFT: 'mr-2',
  RIGHT: 'ml-2',
  CENTER: 'm-0 p-0'
};

type FontSizeType = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL' | 'XXXL';
const fontSizeMap: { [key in FontSizeType]: string } = {
  XS: 'text-xs',
  SM: 'text-sm',
  MD: 'text-md',
  LG: 'text-lg',
  XL: 'text-xl',
  XXL: 'text-2xl',
  XXXL: 'text-3xl'
};

interface IconConfig {
  icon: ReactElement;
  position: IconPosition;
  customClass?: string;
}

interface ButtonPropsType {
  text?: string;
  behavior?: 'BUTTON' | 'LINK';
  type?: ButtonStyleType;
  shape?: ButtonStyleShapeType;
  textWeight?: ButtonTextWeightType;
  textStyle?: ButtonTextStyleType;
  iconConfig?: IconConfig;
  href?: string;
  fontSize?: FontSizeType;
  onClick?: () => void;
}

const Button = ({
  text,
  iconConfig,
  href,
  behavior = 'BUTTON',
  type = 'PRIMARY',
  shape = 'ROUNDED_FULL',
  textWeight = 'NORMAL',
  textStyle = 'DEFAULT',
  fontSize = 'MD',
  onClick = () => {
    console.log('Button Clicked');
  }
}: ButtonPropsType) => {
  return (
    <>
      {behavior === 'LINK' ? (
        <a
          href={href}
          className={`flex items-center justify-center transition-all duration-200 ease-in ${buttonStyle[type]} 
          ${buttonStyleShape[shape]} ${buttonTextWeight[textWeight]} ${buttonTextStyle[textStyle]}
          ${fontSizeMap[fontSize]}`}
        >
          {text}
        </a>
      ) : (
        <div
          className={`inline-flex items-center justify-center transition-all duration-200 ease-in 
          ${iconConfig?.position === 'RIGHT' ? 'flex-row-reverse' : ''}
          ${buttonStyle[type]} ${buttonStyleShape[shape]}`}
          onClick={() => {
            onClick();
          }}
          role='button'
        >
          {iconConfig?.icon ? (
            <div
              className={` 
              ${IconPositionStyle[iconConfig.position]}`}
            >
              {iconConfig?.icon}
            </div>
          ) : null}
          {text && text !== '' ? (
            <p
              className={` ${buttonTextWeight[textWeight]} ${buttonTextStyle[textStyle]} ${fontSizeMap[fontSize]}`}
            >
              {text}
            </p>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Button;
