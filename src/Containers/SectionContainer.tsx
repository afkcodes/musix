import SectionHeader from '~/components/SectionHeader';

interface SectionContainerProps {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
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
