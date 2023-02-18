import { useRef, useState } from 'react';

const getOrientation = async (img: HTMLImageElement) => {
  const width = img.naturalWidth || img.width;
  const height = img.naturalHeight || img.height;
  let orientation = 'SQUARE';

  if (height > width) {
    orientation = 'PORTRAIT';
  }
  if (height < width) {
    orientation = 'LANDSCAPE';
  }

  return orientation;
};

export const FallbackImage = ({
  source,
  fitStrategy,
  loadStrategy,
  alt,
  progressiveImageSource,
  onLoad
}: any) => {
  const [orientation, setOrientation] = useState('SQUARE');
  const [src, setSrc] = useState(source);
  const [status, setStatus] = useState('LOADING');
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoad = () => {
    if (imgRef && imgRef.current && imgRef.current.src) {
      getOrientation(imgRef.current).then((orientation) => {
        setOrientation(orientation);
      });
    }
    setTimeout(() => {
      setStatus('SUCCESS');
      onLoad('SUCCESS');
    }, 400);
  };

  const onImageLoadError = () => {
    setSrc(
      'https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KAq2A33j'
    );
    setStatus('ERROR');
  };

  return (
    <>
      {status === 'LOADING' ? (
        <img
          ref={imgRef}
          src={progressiveImageSource}
          srcSet={src}
          alt={alt}
          loading={loadStrategy}
          className={`h-full w-full ${fitStrategy} 
        ${status === 'LOADING' ? 'opacity-0' : 'opacity-100 blur-0'} 
        transition-all duration-200 ease-in`}
          tabIndex={0}
        />
      ) : null}
      <img
        ref={imgRef}
        src={src || progressiveImageSource}
        srcSet={src}
        alt={alt}
        onError={() => {
          onImageLoadError();
        }}
        loading={loadStrategy}
        className={`h-full w-full ${fitStrategy} 
        ${status === 'LOADING' ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'} 
        transition-all duration-200 ease-in`}
        onLoad={() => {
          onImageLoad();
        }}
        tabIndex={0}
      />
    </>
  );
};
