import React, { useRef, useEffect, useState } from 'react'

type PGProps = {
  cloudName: string
}

declare global {
  interface Window {
      cloudinary:any;
  }
}

function ProductGallery({ cloudName }: PGProps) {
  const [cldName, setCldName] = useState<string>(cloudName)
  const [loaded, setLoaded] = useState(false)

  // const pgElement = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://product-gallery.cloudinary.com/all.js'
    // debugger;
    scriptTag.addEventListener('load', () => setLoaded(true))
    document.body.appendChild(scriptTag)
  }, [])

  useEffect(() => {
    if (!loaded) return
    // debugger;

    console.log('Component mounted')
    const productGallery = window.cloudinary.galleryWidget({
      container: '#product-gallery',
      cloudName: cldName,
      mediaAssets: [
        { tag: 'electric_car_product_gallery_demo', transformation: { crop: "limit",height:600,width:800 }  },
        { tag: 'electric_car_product_gallery_demo', mediaType: 'video', transformation: {border: "5px_solid_black"} },
        { tag: 'electric_car_360_product_gallery_demo', mediaType: 'spin' },
      ],
      "navigationButtonProps": {
        "iconColor": "#bada55",
        "color":"black",
        shape: 'square',
  size: 40
     
    }
    //   "carouselLocation": "bottom",
    })
    productGallery.render()
  }, [loaded])

  return (
    <>
      <div id="product-gallery" className="pg-gallery" ></div>
    </>
  )
}
export default ProductGallery
