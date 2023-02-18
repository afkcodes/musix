import { useEffect, useState } from 'react';
import Figure from '~/components/Figure';
import FigureLabel from '~/components/FigureLabel';

const getHomeData = async () => {
  const res = await fetch(
    // 'https://www.jiosaavn.com/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0'
    'https://saavn.me/modules?language=hindi'
  );
  const data = await res.json();
  return data;
};
const getHomeData2 = async () => {
  const res = await fetch(
    'https://www.jiosaavn.com/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0'
  );
  const data = await res.json();
  return data;
};
const Home = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    getHomeData().then((data) => setHomeData(data));
    getHomeData2().then((data) => console.log(data));
  }, []);

  console.log(homeData);
  return (
    <div className=' py-2'>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.albums?.map((album, idx) => (
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
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.charts?.map((album, idx) => (
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
                  label: album.title,
                  subLabel: album.subtitle
                }}
                size='XXL'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.playlists?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <Figure
                key={idx}
                source={album.image[2].link}
                progressiveImageSource={album.image[0].link}
                altText={''}
                shape='DEFAULT'
                size='XXL'
                imageFitStrategy='CONTAIN'
                loadingStrategy='LAZY'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.trending.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <Figure
                key={idx}
                source={album.image[2].link}
                progressiveImageSource={album.image[0].link}
                altText={''}
                shape='DEFAULT'
                size='XXL'
                imageFitStrategy='CONTAIN'
                loadingStrategy='LAZY'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='no-scrollbar overflow-x-auto py-2'>
        <ul className='flex snap-x snap-proximity '>
          {homeData?.data?.trending.albums?.map((album, idx) => (
            <li className='mx-2 snap-normal' key={idx}>
              <Figure
                key={idx}
                source={album.image[2].link}
                progressiveImageSource={album.image[0].link}
                altText={''}
                shape='DEFAULT'
                size='XXL'
                imageFitStrategy='CONTAIN'
                loadingStrategy='LAZY'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
