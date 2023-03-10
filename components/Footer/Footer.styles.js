import styled from 'styled-components'

export const Container = styled.footer`
  background-color: var(--brand-blue);
  margin-top: auto;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 3em;
  
  @media (max-width: 920px) {
    flex-direction: column;
    padding: 1em 0em;
  }

  @media (max-width: 270px) {
    flex-direction: row;
    padding: 1em;
  }
`

export const Item = styled.a`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding: 1em 1em;
  cursor: pointer;
  text-decoration: none;
  color: white;
  margin: 0;
  background: none;
  border: 0;
  -webkit-tap-highlight-color: transparent;
  
  span {
    text-align: center;
  }

  &:hover {
    color: var(--brand-orange);
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 0.3em;
  }

  @media (max-width: 920px) {
    flex-direction: row;
    height: 100%;
    padding: .7em;
  }

  @media (max-width: 270px) {
    span {
      display: none;
    }
  }
`
