import Button from './Button';

const SectionHeader = () => {
  return (
    <div className='flex justify-between text-gray-200'>
      <p className='text-lg font-medium'>Header</p>
      <Button
        text='See All'
        type='LINK'
        shape='UNSTYLED'
        fontSize='XS'
        behavior='LINK'
        href='https://www.google.com'
      />
    </div>
  );
};

export default SectionHeader;
