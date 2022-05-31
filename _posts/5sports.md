---
title: 'Sports Car'
excerpt: 'Once the body length deconstructed the NQR. Once the 4WD braked the engine! The Nissan developed the heavy duty body. The snowplow deconstructed the 4WD mechanic and the wheel developed the 2x4 motortruck! The van accelerated the durable WorkStar 7400.'
coverImage: 'https://res.cloudinary.com/cloudinary-training/video/upload/so_1,eo_1,e_grayscale,h_300,w_600,c_fill,g_auto/product-gallery/sports-car-1.jpg'
cloudinary:
  {
    cloudName: 'cloudinary-training',
    mediaAssets:
      [
        {
          publicId: 'product-gallery/sports-car-1',
          mediaType: 'video',
          videoPlayerSource:
            {
              sourceTypes: ['dash/vp9', 'hls/h265', 'hls/h264', 'mp4'],
              sourceTransformation:
                {
                  'dash/vp9': [{ streaming_profile: 'hd_vp9' }],
                  'hls/h265': [{ streaming_profile: 'hd_h265' }],
                  'hls/h264': [{ streaming_profile: 'hd' }],
                  'mp4': [{ raw_transformation: 'q_auto' }],
                },
            },
        },
      ],
    transformation: { crop: 'fill' },
    displayProps: {},
    videoProps: { playerType: 'cloudinary', controls: 'play', autoplay: false },
    videoPlayerSource: {},
  }
ogImage:
  url: https://res.cloudinary.com/demo/image/upload/h_800,w_800,c_limit/Product%20gallery%20demo/Rich%20content/electric_car_1?pgw=1&pgwact=1'
---
---
### Parameters 
 1.&#9;image using tag  
 2.&#9;video player with **play** control  
 3.&#9;adaptive bitrate streaming

[![Electric options](https://res.cloudinary.com/cloudinary-training/image/upload/h_350,f_auto,q_auto/product-gallery/sports-options.png)](https://github.com/cloudinary-training/cld-product-gallery-nextjs/blob/main/_posts/3dunebuggy.md)
