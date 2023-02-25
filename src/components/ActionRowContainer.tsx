import { RiHeartLine, RiMore2Line } from 'react-icons/ri';
import Button from './Button';

const actionItemData = [
  { icon: <RiHeartLine size={24} />, text: 'Home' },
  { icon: <RiMore2Line size={24} />, text: 'Search' }
];
const ActionRowContainer = () => {
  return (
    <div className='ml-2 flex h-full items-center justify-center'>
      {actionItemData.map((el, id) => (
        <Button
          key={id}
          type='ICON'
          shape='ROUNDED_FULL'
          iconConfig={{
            icon: actionItemData[id]?.icon,
            position: 'CENTER'
          }}
        />
      ))}
    </div>
  );
};

export default ActionRowContainer;
