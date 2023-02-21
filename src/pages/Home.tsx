import { useEffect, useState } from 'react';
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
const Home = () => {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    getHomeData().then((data) => setHomeData(data));
    // getHomeData2().then((data) => console.log(data));
  }, []);

  console.log(homeData);
  return (
    <div className='relative'>
      {[1, 2, 3, 5, 6].map((el, id) => (
        <div className='no-scrollbar overflow-x-auto py-2' key={id}>
          <SnapCarousel type='FLOW'>
            {homeData?.data?.trending?.albums?.map((album, idx) => (
              <li className='mx-2 snap-normal' key={idx}>
                <FigureLabel
                  imageConfig={{
                    source: album.image[2].link,
                    progressiveImageSource: album.image[0].link,
                    shape: 'DEFAULT',
                    altText: '',
                    size: 'XXL'
                  }}
                  labelConfig={{
                    label: album.name,
                    subLabel: 'Vishal, Shekhar'
                  }}
                  size='XXL'
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

export default Home;
