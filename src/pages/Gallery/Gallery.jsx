import GalleryImage from '/src/components/GalleryImage/GalleryImage'

import { GalleryWrapper, PhotosContainer } from './Gallery.styles'

const Gallery = () => {
  return <GalleryWrapper>
    <h1>Gallery</h1>
    <PhotosContainer>
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
      <GalleryImage
        firstImage={'/before.png'}
        secondImage={ '/after.png'}
      />
    </PhotosContainer>
  </GalleryWrapper>
}

export default Gallery
