import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const MottoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const Motto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: .5em;

  h1 {
    margin: 0;
  }
  
  p {
    margin: 0;
    width: 70%;
  }
`

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7em;
  margin: 2em 3%;

  @media (max-width: 1620px) {
    gap: 3%;
  }

  @media (max-width: 1200px) {
    grid-template-rows: 1.1fr min-content;
    grid-template-columns: none;
    gap: 1em;
  }

`

export const IntroDetail = styled.div`
  
`

export const IntroImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  width: 500px;

  @media (max-width: 520px) {
    width: fit-content;
    column-gap: 1em;
  }

  @media (max-width: 335px) {
    grid-template-columns: 1fr;
  }
`

export const TestimoniesWrapper = styled.div`
  width: 100%;
  background-color: var(--brand-blue);
  height: 100px;

  @media (max-width: 430px) {
    height: 150px;
  }
`

export const AboutUsWrapper = styled.div`
  margin: 2em 3%;
`

export const AboutUsDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7em;

  @media (max-width: 1620px) {
    gap: 3%;
  }

  @media (max-width: 1200px) {
    grid-template-rows: 1.1fr min-content;
    grid-template-columns: none;
    gap: 1em;
  }
`

export const AboutTickList = styled.div`
  
`

export const AboutImageContainer = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`
