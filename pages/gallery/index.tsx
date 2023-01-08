import { useEffect, useState } from 'react'
import { DropdownSelect, ImageSlider } from '@components'
import Head from 'next/head'

import { beforeAfterPhotos } from './galleryLibrary'
import { GalleryHeader, PhotosContainer, Wrapper } from './styles'

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [filteredPhotos, setFilteredPhotos] = useState(beforeAfterPhotos)

  useEffect(() => {
    filter !== 'All' ? setFilteredPhotos(beforeAfterPhotos.filter(pair => pair.category === filter)) : setFilteredPhotos(beforeAfterPhotos)
  }, [filter])

  return (
    <>
      <Head>
        <title>Gallery | Reidy's Renos & Repairs</title>
      </Head>
      <Wrapper>
        <GalleryHeader>
          <h1>Gallery</h1>
          <DropdownSelect options={['All', 'Kitchen', 'Bathroom', 'Repairs']} setState={setFilter} />
        </GalleryHeader>
        <PhotosContainer>
          {filteredPhotos.map((pair, index) => <ImageSlider key={index} firstImage={`/gallery/${pair.after}`} secondImage={`/gallery/${pair.before}`} />)}

        </PhotosContainer>
      </Wrapper>
    </>
  )
}

export default Gallery
