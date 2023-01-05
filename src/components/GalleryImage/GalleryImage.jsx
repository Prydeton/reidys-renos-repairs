import ReactBeforeSliderComponent from 'react-before-after-slider-component'

import { GalleryImageContainer } from './GalleryImage.styles'
import 'react-before-after-slider-component/dist/build.css'
export const GalleryImage = ({firstImage, secondImage}) => {
  return <GalleryImageContainer>
    <ReactBeforeSliderComponent
      firstImage={{imageUrl: firstImage}}
      secondImage={{imageUrl: secondImage}}
      delimiterColor={'#EF7623'}
    />
  </GalleryImageContainer>
}

export default GalleryImage
