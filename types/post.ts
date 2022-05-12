import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  cloudinary: {
    cloudName: string,
    mediaAssets: object,
    displayProps: object,
    videoProps: object,
    videoPlayerSource: object
  }
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
