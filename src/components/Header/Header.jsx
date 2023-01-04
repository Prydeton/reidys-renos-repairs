import { BannerContainer, Container, NavContainer, NavItem, NavItems } from './Header.styles'

const Header = () =>
  <Container>
    <BannerContainer>
      <img src='/logo.webp'></img>
      <span>Call Andrew: 0437 773 667</span>
    </BannerContainer>
    <NavContainer>
      <NavItems>
        <NavItem>Home</NavItem>
        <NavItem>Gallery</NavItem>
        <NavItem>Contact</NavItem>
      </NavItems>
    </NavContainer>
  </Container>

export default Header
