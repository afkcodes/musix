import Input from '~/components/Input';
import ComponentContainer from '~/containers/ComponentContainer';

const Search = () => {
  return (
    <ComponentContainer>
      <Input placeholder='Search your favorite music or podcast' />
    </ComponentContainer>
  );
};

export default Search;

// <div className='h-screen '>
//   <div className='flex'>
//     <div className='h-28 w-28 animate-pulse bg-gray-400'></div>
//     <div className='ml-2 mt-2'>
//       <div className='w-60 animate-pulse rounded-full bg-gray-400 p-2'></div>
//       <div className='mt-2 w-40 animate-pulse rounded-full bg-gray-400 p-2'></div>
//     </div>
//   </div>
// </div>;
