import { BannerContainer, Container, NavContainer, NavItem, NavItems } from './Header.styles'

const Header = () =>
  <Container>
    <BannerContainer>
      <img src="/logo.webp"></img>
      <span>Call Andrew: 0437 773 667</span>
    </BannerContainer>
    <NavContainer>
      <NavItems>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/gallery">Gallery</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavItems>
    </NavContainer>
  </Container>

export default Header
