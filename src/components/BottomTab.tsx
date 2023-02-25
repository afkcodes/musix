import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { CgMediaPodcast } from 'react-icons/cg';
import { RiHome5Line, RiSearchLine, RiSettingsLine } from 'react-icons/ri';
const portal = document.getElementById('bottom_navigation_portal');

const bottomTabData = [
  { icon: <RiHome5Line size={24} />, text: 'Home' },
  { icon: <RiSearchLine size={24} />, text: 'Search' },
  { icon: <CgMediaPodcast size={24} />, text: 'Podcasts' },
  { icon: <RiSettingsLine size={24} />, text: 'Settings' }
];

const BottomTab = () => {
  return (
    <Fragment>
      {portal &&
        createPortal(
          <div className='fixed bottom-0 flex h-16 w-full bg-[#010101]/40 bg-clip-padding text-white backdrop-blur-md'>
            {bottomTabData.map((el, idx) => (
              <div
                key={idx}
                className='relative flex flex-1 items-center justify-center'
              >
                {/* <div className='absolute h-full w-full bg-black opacity-40'></div> */}
                <div className='flex flex-col items-center justify-center'>
                  <div>{el.icon}</div>
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
