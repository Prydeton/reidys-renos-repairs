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
          <DropdownSelect options={['All', 'Bathroom', 'Indoors', 'Outdoors']} setState={setFilter} />
        </GalleryHeader>
        <PhotosContainer>
          {filteredPhotos.map((pair, index) => <ImageSlider key={index} firstImage={`/gallery/${pair.before}`} secondImage={`/gallery/${pair.after}`} />)}
        </PhotosContainer>
      </Wrapper>
    </>
  )
}

export default Gallery

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600, // revalidate every hour
  }
}
