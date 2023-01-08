import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2em 3% 2em 3%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const PhotosContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  
  @media (max-width: 707px) {
    flex-direction: column;
    align-items: center;
  }
`

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
