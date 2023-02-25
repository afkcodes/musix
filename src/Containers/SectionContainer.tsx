import SectionHeader from '~/components/SectionHeader';

const SectionContainer = ({ children }) => {
  return (
    <section className='py-2'>
      <div className='mb-2 px-3'>
        <SectionHeader />
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
