import { ReactElement } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Button from './Button';

interface SearchIconDataType {
  icon: ReactElement;
  text: string;
  route: string;
}
const searchIconData: SearchIconDataType[] = [
  { icon: <RiSearchLine size={24} />, text: 'Search', route: '/search' }
];

type InputShapeType = 'DEFAULT' | 'ROUNDED_FULL' | 'ROUNDED_EDGE';
const inputShapeStyle: { [key in InputShapeType]: string } = {
  DEFAULT: 'rounded-none',
  ROUNDED_FULL: 'rounded-full',
  ROUNDED_EDGE: 'rounded-md'
};

interface InputPropsType {
  placeholder: string;
  iconData?: SearchIconDataType[];
  shape?: InputShapeType;
  replaceDefaultIcons?: boolean;
  onInputFocus?: () => {};
  onInputBlur?: () => {};
  onActionButtonClick?: () => {};
}

const Input: React.FC<InputPropsType> = ({
  placeholder = 'Placeholder text',
  iconData = [],
  replaceDefaultIcons,
  shape = 'DEFAULT',
  onInputFocus = () => console.log('input in focus'),
  onInputBlur = () => console.log('input blurred'),
  onActionButtonClick = () => console.log('action button clicked')
}) => {
  const mergedIconData = replaceDefaultIcons
    ? iconData
    : [...searchIconData, ...iconData];
  return (
    <div
      className={`flex items-center justify-center bg-[#282727] ${inputShapeStyle[shape]} overflow-hidden`}
    >
      <input
        type='text'
        className='w-full border-none bg-[#282727] px-4 py-3 outline-none ring-0'
        placeholder={placeholder}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      <div>
        {mergedIconData.map((el, idx) => (
          <Button
            key={idx}
            type='LINK'
            iconConfig={{ icon: el?.icon, position: 'CENTER' }}
            onClick={onActionButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Input;
