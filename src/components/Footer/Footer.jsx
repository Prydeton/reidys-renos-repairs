import { Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { Container, Item } from './Footer.styles'

const Footer = () => <Container>
    <Item href="tel:0437773667">
      <Phone />
      <span>0437 773 667</span>
    </Item>
    <Item href="mailto:admin@reidysrenos.com.au">
      <Mail/>
      <span>admin@reidysrenos.com.au</span>
    </Item>
    <Item href="https://maps.google.com/maps?q=Karama+NT+0812">
      <MapPin />
      <span>PO Box 177 Karama Darwin, NT 0802</span>
    </Item>
    <Item href="https://www.facebook.com/ReidysRenos">
      <Facebook />
      <span>ReidysRenos</span>
    </Item>
  </Container>

export default Footer
