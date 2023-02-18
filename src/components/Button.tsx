type ButtonStyleType = 'PRIMARY' | 'OUTLINE' | 'GHOST' | 'LINK' | 'ICON';
const buttonStyle: {
  [key in ButtonStyleType]: string;
} = {
  PRIMARY: 'bg-[#d80000] active:bg-red-700 text-white',
  OUTLINE:
    'border border-[#d80000] active:border-red-700 text-[#d80000] active:text-red-700',
  GHOST: 'bg-none hover:bg-[#d8000025] active:bg-[#d8000035] text-[#d80000]',
  LINK: '',
  ICON: ''
};

type ButtonStyleShapeType = 'DEFAULT' | 'ROUNDED_EDGE' | 'ROUNDED_FULL';
const buttonStyleShape: {
  [key in ButtonStyleShapeType]: string;
} = {
  DEFAULT: 'rounded-none',
  ROUNDED_EDGE: 'rounded',
  ROUNDED_FULL: 'rounded-full'
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

interface ButtonPropsType {
  content: string;
  behavior?: 'BUTTON' | 'LINK';
  type?: ButtonStyleType;
  shape?: ButtonStyleShapeType;
  textWeight?: ButtonTextWeightType;
  textStyle?: ButtonTextStyleType;
  onClick?: () => void;
}

const Button = ({
  content,
  behavior = 'BUTTON',
  type = 'PRIMARY',
  shape = 'ROUNDED_FULL',
  textWeight = 'NORMAL',
  textStyle = 'DEFAULT',
  onClick = () => {
    console.log('Button Clicked');
  }
}: ButtonPropsType) => {
  return (
    <>
      {behavior === 'LINK' ? (
        <a
          href='https://www.google.com'
          className={`flex items-center justify-center px-4 py-2 transition-all duration-200 ease-in ${buttonStyle[type]} 
          ${buttonStyleShape[shape]} ${buttonTextWeight[textWeight]} ${buttonTextStyle[textStyle]}`}
        >
          {content}
        </a>
      ) : (
        <button
          className={`flex items-center justify-center px-4 py-2 transition-all duration-200 ease-in  ${buttonStyle[type]} ${buttonStyleShape[shape]}`}
          onClick={() => {
            onClick();
          }}
        >
          <span
            className={` ${buttonTextWeight[textWeight]} ${buttonTextStyle[textStyle]}`}
          >
            {content}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
