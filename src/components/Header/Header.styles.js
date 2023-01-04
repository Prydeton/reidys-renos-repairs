import { styled } from 'goober'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
`

export const BannerContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 3em;
  height: 210;

  img {
    height: 80px;
  }

  span {
    font-size: 2rem;
    color: var(--brand-blue);
    font-weight: bold;
  }

  @media (max-width: 715px) {
    flex-direction: column;
    gap: 1em;
    padding: 1em;

    img {
      height: 120px;
    }

    span {
      font-size: 1.5rem;
    }
  }
`

export const NavContainer = styled('nav')`
  background-color: var(--brand-blue);
  height: 70px;
  width: 100%;
`

export const NavItems = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 715px) {
    width: 100%;
  }

`

export const NavItem = styled('a')`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0em 1.6em;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: var(--brand-orange);
  }

  @media (max-width: 715px) {
    flex-grow: 1;
  }
`
