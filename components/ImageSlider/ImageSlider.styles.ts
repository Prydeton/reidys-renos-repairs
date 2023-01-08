import styled from 'styled-components'

interface ContainerProps {
  position: string
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  place-content: center;
  position: relative;
  overflow: hidden;
  --position: 50%;

  img {
    display: block;
    user-select: none;
  }

  --position: ${p => p.position}%;
`

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  max-width: 500px;
  max-height: 500px;

  img {
    object-fit: cover;
    object-position: left;
  }
  
  img:nth-of-type(1) {
    position: absolute;
    inset: 0;
    width: var(--position);
  }
`

export const Slider = styled.input`
  position: absolute;
  inset: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;

  :focus-visible {
    outline: 5px solid black;
    outline-offset: 3px;
  }
`

export const SliderLine = styled.div`
  position: absolute;
  inset: 0;
  width: .2rem;
  height: 100%;
  background-color: var(--brand-orange);
  left: var(--position);
  transform: translateX(-50%);
  pointer-events: none;
`

export const SliderButton = styled.div`
  position: absolute;
  background-color: var(--brand-orange);
  color: black;
  padding: .5rem;
  border-radius: 100vw;
  display: grid;
  place-items: center;
  top: 50%;
  left: var(--position);
  transform: translate(-50%, -50%);
  pointer-events: none;
  box-shadow: 1px 1px 1px hsl(0, 50%, 2%, .5);
`
