import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FigureLabel from '~/components/FigureLabel';

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
    <div className=' py-2'>
      <Link to='/search'> Go to search page</Link>

      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <FigureLabel
                imageConfig={{
                  source: album.image[1].link,
                  progressiveImageSource: album.image[0].link,
                  shape: 'DEFAULT',
                  altText: '',
                  size: 'XXL'
                }}
                labelConfig={{
                  label: album.name,
                  subLabel: 'Vishal, Shekhar',
                  subLabelType: 'LINK',
                  subLabelHref: 'https://www.google.com',
                  subLabelTextStyle: 'UNDERLINED'
                }}
                size='XXL'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <FigureLabel
                imageConfig={{
                  source: album.image[1].link,
                  progressiveImageSource: album.image[0].link,
                  shape: 'DEFAULT',
                  altText: '',
                  size: 'XXL'
                }}
                labelConfig={{
                  label: album.name,
                  subLabel: 'Vishal, Shekhar',
                  subLabelType: 'LINK',
                  subLabelHref: 'https://www.google.com',
                  subLabelTextStyle: 'UNDERLINED'
                }}
                size='XXL'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <FigureLabel
                imageConfig={{
                  source: album.image[1].link,
                  progressiveImageSource: album.image[0].link,
                  shape: 'DEFAULT',
                  altText: '',
                  size: 'XXL'
                }}
                labelConfig={{
                  label: album.name,
                  subLabel: 'Vishal, Shekhar',
                  subLabelType: 'LINK',
                  subLabelHref: 'https://www.google.com',
                  subLabelTextStyle: 'UNDERLINED'
                }}
                size='XXL'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <FigureLabel
                imageConfig={{
                  source: album.image[1].link,
                  progressiveImageSource: album.image[0].link,
                  shape: 'DEFAULT',
                  altText: '',
                  size: 'XXL'
                }}
                labelConfig={{
                  label: album.name,
                  subLabel: 'Vishal, Shekhar',
                  subLabelType: 'LINK',
                  subLabelHref: 'https://www.google.com',
                  subLabelTextStyle: 'UNDERLINED'
                }}
                size='XXL'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <FigureLabel
                imageConfig={{
                  source: album.image[1].link,
                  progressiveImageSource: album.image[0].link,
                  shape: 'DEFAULT',
                  altText: '',
                  size: 'XXL'
                }}
                labelConfig={{
                  label: album.name,
                  subLabel: 'Vishal, Shekhar',
                  subLabelType: 'LINK',
                  subLabelHref: 'https://www.google.com',
                  subLabelTextStyle: 'UNDERLINED'
                }}
                size='XXL'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
