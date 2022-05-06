import React, { useRef, useEffect, useState } from 'react';
import { ObjectTypeDeclaration } from 'typescript';

type Props = {
  cloudName: string;
  media: object;
  video: object;
  title: string;
  display: object;
};

declare global {
  interface Window {
    cloudinary: any;
  }
}

export default function ProductGallery({ cloudName, media, display, video }: Props) {
  const [cldName, setCldName] = useState<string>(cloudName);
  const [mediaAssets, setMedia] = useState<object>(media);
  const [videoProps, setVideoProps] = useState<object>(video);
  const [displayProps, setDisplayProps] = useState<object>(display);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://product-gallery.cloudinary.com/all.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const productGallery = window.cloudinary.galleryWidget({
      container: '#product-gallery',
      cloudName: cldName,
      placeholderImage: true,
      viewportBreakpoints: [
        {
          breakpoint: 600,
          carouselStyle: 'thumbnails',
          carouselLocation: 'bottom',
        },
        {
          breakpoint: 300,
          carouselStyle: 'indicators',
          carouselLocation: 'bottom',
          navigation: 'always',
        },
      ],
      imageBreakpoint: 300, // keep to 3 sizes
      displayProps: displayProps,
      mediaAssets: mediaAssets,
      videoProps: videoProps,
      navigationButtonProps: {
        iconColor: '#bada55',
        color: 'black',
        shape: 'square',
        size: 40,
      },
    });
    productGallery.render();
  }, [loaded]);

  return (
    <>
      <div id='product-gallery' className='pg-gallery'></div>
    </>
  );
}
