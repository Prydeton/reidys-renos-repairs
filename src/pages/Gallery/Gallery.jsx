import { useEffect, useState } from 'react'

import { DropdownSelect } from '/src/components'
import GalleryImage from '/src/components/GalleryImage/GalleryImage'
import { usePageTitle } from '/src/Hooks'

import { GalleryHeader, GalleryWrapper, PhotosContainer } from './Gallery.styles'
import { beforeAfterPhotos } from './library'

const Gallery = () => {
  usePageTitle('Gallery')

  const [filter, setFilter] = useState('All')
  const [filteredPhotos, setFilteredPhotos] = useState(beforeAfterPhotos)

  useEffect(() => {
    filter !== 'All' ? setFilteredPhotos(beforeAfterPhotos.filter(pair => pair.category === filter)) : setFilteredPhotos(beforeAfterPhotos)
  }, [filter])

  return <GalleryWrapper>
    <GalleryHeader>
      <h1>Gallery</h1>
      <DropdownSelect options={['All', 'Kitchen', 'Bathroom', 'Repairs']} setState={setFilter} />
    </GalleryHeader>
    <PhotosContainer>
      {filteredPhotos.map((pair, index) => <GalleryImage key={index} firstImage={`/gallery/${pair.after}`} secondImage={`/gallery/${pair.before}`} />)}
    </PhotosContainer>
  </GalleryWrapper>
}

export default Gallery
