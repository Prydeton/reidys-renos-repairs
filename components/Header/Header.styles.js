import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 3em;

  a {
    font-size: 2rem;
    color: var(--brand-blue);
    font-weight: bold;
    text-decoration: none;
    
    p {
      display: inline;
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 1em;
    padding: 1em;

    img {
      max-height: 170px;
      height: auto;
      width: auto;
      max-width: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 465px) {
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 342px) {
    a {
      font-size: 1.3rem;
    }

    img {
      height: auto;
      width: 90%;
    }
  }
`

export const NavContainer = styled.nav`
  background-color: var(--brand-blue);
  padding: 0px 3em;

  @media (max-width: 715px) {
    padding: 0px 1em;
  }
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 3em;

  @media (max-width: 715px) {
    gap: 1em;
    justify-content: space-between;
  }

  @media (max-width: 350px) {
    gap: 0;
    flex-direction: column;
  }
`

export const NavItem = styled.a`
  color: white;
  padding: 1em 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &.active, &:hover {
    color: var(--brand-orange);
  }

  @media (max-width: 715px) {
    flex-grow: 1;
  }
`
