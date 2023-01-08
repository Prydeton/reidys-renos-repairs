import Image from 'next/image'

import { BannerContainer, Container, NavContainer, NavItem, NavItems } from './Header.styles'

const Header = () =>
  <Container>
    <BannerContainer>
      <Image src="/logo.webp" alt="Reidy's Renos and Repairs logo" width={507} height={227} />
      <a href="tel:0437773667"><p>Call Andrew: </p><p>0437 773 667</p></a>
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
