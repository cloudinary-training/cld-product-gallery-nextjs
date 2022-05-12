require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .create_upload_preset({
    name: 'pgw-video-streaming',
    type: "upload",
    overwrite: true,
    invalidate: true,
    resource_type: "video",
    eager: [
      { crop: 'pad',dpr: '2.0', duration:'30',height:'665',width:'665'},
      { crop: 'pad', height:'665',width:'665'},
      { raw_transformation: 'f_webm,vc_vp9,q_auto/mp4' },
      { raw_transformation: 'f_mp4,vc_h265,q_auto/mp4' },
      { raw_transformation: 'f_mp4,vc_h264,q_auto/mp4' }
    ],
    eager_async: true,
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))