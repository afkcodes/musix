import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomTab from '~/components/BottomTab';
import FigureLabel from '~/components/FigureLabel';
import SnapCarousel from '~/components/SnapCarousel';

const getHomeData = async () => {
  const res = await fetch(
    // 'https://www.jiosaavn.com/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0'
    'https://saavn.me/modules?language=hindi'
  );
  const data = await res.json();
  return data;
};
// const getHomeData2 = async () => {
//   const res = await fetch(
//     'https://www.jiosaavn.com/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0'
//   );
//   const data = await res.json();
//   return data;
// };
const Search = () => {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    getHomeData().then((data) => setHomeData(data));
    // getHomeData2().then((data) => console.log(data));
  }, []);

  console.log(homeData);
  return (
    <div className='relative'>
      <Link to='/' className='text-white'>
        GO to home
      </Link>
      {[1, 2, 3, 5, 6].map((el, id) => (
        <div className='no-scrollbar overflow-x-auto py-2' key={id}>
          <SnapCarousel type='FLOW'>
            {homeData?.data?.trending?.albums?.map((album, idx) => (
              <li className='shrink-0 snap-normal px-2 md:w-auto' key={idx}>
                <FigureLabel
                  imageConfig={{
                    source: album.image[2].link,
                    progressiveImageSource: album.image[0].link,
                    shape: 'DEFAULT',
                    altText: '',
                    size: 'XL'
                  }}
                  labelConfig={{
                    label: album.name,
                    subLabel: 'Vishal, Shekhar'
                  }}
                  size='XL'
                  // orientation='HORIZONTAL'
                />
              </li>
            ))}
          </SnapCarousel>
        </div>
      ))}
      <BottomTab />
    </div>
  );
};

export default Search;
