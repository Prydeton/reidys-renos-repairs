import { FC, useState } from 'react'
import { ChevronsLeftRight } from 'lucide-react'
import Image from 'next/future/image'

import { Container, ImageContainer, Slider, SliderButton, SliderLine } from './ImageSlider.styles'

interface ImageSliderProps {
  firstImage: string,
  secondImage: string
}

const ImageSlider: FC<ImageSliderProps> = ({ firstImage, secondImage}) => {
  const [position, setPosition] = useState('50')

  return <Container position={position}>
    <ImageContainer>
      <Image src={firstImage} width={250} height={250} alt="Before image of renevation" />
      <Image src={secondImage} width={250} height={250} alt="After image of renevation" />
    </ImageContainer>
    <Slider
      type="range"
      min="0"
      max="100"
      value={position}
      aria-label="Percentage of before photo shown"
      onInput={e => {
        const target = e.target as HTMLInputElement
        if (target) setPosition(target.value)
      }}
    />
    <SliderLine></SliderLine>
    <SliderButton aria-hidden="true"><ChevronsLeftRight /></SliderButton>
  </Container>
}

export default ImageSlider
