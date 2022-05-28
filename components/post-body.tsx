import markdownStyles from './markdown-styles.module.css';
import dynamic from 'next/dynamic';
const DynamicProductGallery = dynamic(
  () => import('../components/ProductGallery'),
  {
    ssr: false,
  }
);
type Props = {
  content: string;
  media: object;
  video: object;
  cloudName: string;
  title: string;
  display: object;
  videoPlayerSource: object;
};

const PostBody = ({ cloudName, media,video, display, content ,title, videoPlayerSource}: Props) => {
  return (
    <div className='flex min-h-screen flex-col items-center '>
      <main className='container mx-auto mt-3 px-4 py-10'>
        <div className='grid-container'>
          <section>
            <DynamicProductGallery cloudName={cloudName} videoPlayerSource={videoPlayerSource} media={media} video={video} display={display} title={title} />
          </section>
          <section>
            <h1 className='mb-1 text-6xl font-bold'>{title}</h1>

            <div className='mb-4 mt-10'>
              <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <ul className='mb-5 flex justify-start'>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='mr-1 w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='mr-1 w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='mr-1 w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='far'
                  data-icon='star'
                  className='mr-1 w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='far'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
            </ul>

            <button className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'>
              Add to Cart
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PostBody;
