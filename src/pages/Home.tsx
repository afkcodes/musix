import { useEffect, useState } from 'react';
import BottomTab from '~/components/BottomTab';
import FigureLabel from '~/components/FigureLabel';
import SnapCarousel from '~/components/SnapCarousel';
import SectionContainer from '~/containers/SectionContainer';

const getHomeData = async () => {
  const res = await fetch('https://saavn.me/modules?language=hindi');
  const data = await res.json();
  return data;
};

const Home = () => {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    getHomeData().then((data) => setHomeData(data));
  }, []);

  console.log(homeData);
  return (
    <div className='relative'>
      <SectionContainer>
        {[1].map((el, id) => (
          <SnapCarousel type='DEFAULT' key={id}>
            {homeData?.data?.trending?.albums?.map(
              (album: any, idx: number) => (
                <li className='snap-center' key={idx}>
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
                    orientation='VERTICAL'
                  />
                </li>
              )
            )}
          </SnapCarousel>
        ))}
      </SectionContainer>
      <SectionContainer>
        {[1].map((el, id) => (
          <SnapCarousel type='DEFAULT' key={id}>
            {homeData?.data?.trending?.albums?.map(
              (album: any, idx: number) => (
                <li className='snap-center' key={idx}>
                  <FigureLabel
                    imageConfig={{
                      source: album.image[2].link,
                      progressiveImageSource: album.image[0].link,
                      shape: 'CIRCLE',
                      altText: '',
                      size: 'XL'
                    }}
                    labelConfig={{
                      label: album.name,
                      textAlign: 'CENTER'
                    }}
                    size='XL'
                    orientation='VERTICAL'
                  />
                </li>
              )
            )}
          </SnapCarousel>
        ))}
      </SectionContainer>
      <SectionContainer>
        {[1].map((el, id) => (
          <SnapCarousel type='FLOW' key={id}>
            {homeData?.data?.trending?.albums?.map(
              (album: any, idx: number) => (
                <li key={idx}>
                  <FigureLabel
                    imageConfig={{
                      source: album.image[2].link,
                      progressiveImageSource: album.image[0].link,
                      shape: 'DEFAULT',
                      altText: '',
                      size: 'SM'
                    }}
                    labelConfig={{
                      label: album.name,
                      subLabel: 'Vishal, Shekhar'
                    }}
                    size='SM'
                    orientation='HORIZONTAL'
                  />
                </li>
              )
            )}
          </SnapCarousel>
        ))}
      </SectionContainer>
      <SectionContainer>
        {[1].map((el, id) => (
          <SnapCarousel type='DEFAULT' key={id}>
            {homeData?.data?.trending?.albums?.map(
              (album: any, idx: number) => (
                <li className='snap-center' key={idx}>
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
                    orientation='VERTICAL'
                  />
                </li>
              )
            )}
          </SnapCarousel>
        ))}
      </SectionContainer>

      <BottomTab />
    </div>
  );
};

export default Home;
