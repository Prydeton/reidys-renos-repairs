import { useEffect, useState } from 'react'

import { DropdownSelect } from '/src/components'
import GalleryImage from '/src/components/GalleryImage/GalleryImage'

import { GalleryHeader, GalleryWrapper, PhotosContainer } from './Gallery.styles'

const beforeAfterPhotos = [
  {
    'category': 'Bathroom',
    'before': 'beforeBathroom1',
    'after': 'afterBathroom1'
  },
  {
    'category': 'Bathroom',
    'before': 'beforeBathroom2',
    'after': 'afterBathroom2'
  },
  {
    'category': 'Bathroom',
    'before': 'beforeBathroom3',
    'after': 'afterBathroom3'
  },
  {
    'category': 'Bathroom',
    'before': 'beforeBathroom4',
    'after': 'afterBathroom4'
  }
]

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [filteredPhotos, setFilteredPhotos] = useState(beforeAfterPhotos)
  console.log({filteredPhotos})
  useEffect(() => {
    filter !== 'All' ? setFilteredPhotos(beforeAfterPhotos.filter(pair => pair.category === filter)) : setFilteredPhotos(beforeAfterPhotos)
  }, [filter])

  return <GalleryWrapper>
    <GalleryHeader>
      <h1>Gallery</h1>
      <DropdownSelect options={['All', 'Kitchen', 'Bathroom', 'Repairs']} setState={setFilter} />
    </GalleryHeader>
    <PhotosContainer>
      {filteredPhotos.map((pair, index) => <GalleryImage key={index} firstImage={`/gallery/${pair.before}.jpeg`} secondImage={`/gallery/${pair.after}.jpeg`} />)}
    </PhotosContainer>
  </GalleryWrapper>
}

export default Gallery
