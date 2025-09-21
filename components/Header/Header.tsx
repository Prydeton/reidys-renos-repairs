import Image from 'next/image'
import { useRouter } from 'next/router'

import { BannerContainer, Container, NavContainer, NavItem, NavItems } from './Header.styles'

const Header = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <Container>
      <BannerContainer>
        <Image src="/logo.webp" alt="Reidy's Renos and Repairs logo" width={507} height={227} />
        <a href="tel:0437773667"><p>Call Andrew: </p><p>0437 773 667</p></a>
      </BannerContainer>
      <NavContainer>
        <NavItems>
          <NavItem href="/" className={pathname === '/' ? 'active' : ''}>Home</NavItem>
          <NavItem href="/gallery" className={pathname === '/gallery' ? 'active' : ''}>Gallery</NavItem>
          <NavItem href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</NavItem>
        </NavItems>
      </NavContainer>
    </Container>
  )
}

export default Header
