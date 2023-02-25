import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { CgMediaPodcast } from 'react-icons/cg';
import { RiHome5Line, RiSearchLine, RiSettingsLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
const portal = document.getElementById('bottom_navigation_portal');

const bottomTabData = [
  { icon: <RiHome5Line size={24} />, text: 'Home', route: '/' },
  { icon: <RiSearchLine size={24} />, text: 'Search', route: '/search' },
  { icon: <CgMediaPodcast size={24} />, text: 'Podcasts', route: '/podcast' },
  { icon: <RiSettingsLine size={24} />, text: 'Settings', route: '/settings' }
];

const BottomTab = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      {portal &&
        createPortal(
          <div className='fixed bottom-0 flex h-16 w-full bg-[#222222]/40 bg-clip-padding text-white backdrop-blur-md'>
            {bottomTabData.map((el, idx) => (
              <div
                key={idx}
                className='relative flex flex-1 items-center justify-center'
              >
                <div className='flex flex-col items-center justify-center'>
                  <div>
                    <Button
                      type='ICON'
                      iconConfig={{ icon: el.icon, position: 'CENTER' }}
                      onClick={() => {
                        navigate(el.route);
                      }}
                    />
                  </div>
                  <p className='pt-1 text-xs'>{el.text}</p>
                </div>
              </div>
            ))}
          </div>,
          portal
        )}
    </Fragment>
  );
};

export default BottomTab;
