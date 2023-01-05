import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextareaAutosize, TextField } from '@mui/material'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '/src/components'

import { ContactDetail, ContactForm, ContactMethod, ContactMethodsList, ContactWrapper } from './Contact.styles'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm()

  const onSubmit = async values => {
    console.log({values})
  }

  return <ContactWrapper>
    <h1>Contact</h1>
    <ContactDetail>
      <div>
        <p>We are dedicated to providing a reliable home commercial renovation and improvement service. We bridge the gap between home handyman and large builder. For any odd jobs from plastering holes in walls to a complete bathroom renovation, call Reidy’s for a competitive quote.</p>
        <p>We accept cash, eftpos and for your convenience, credit card.</p>
        <ContactMethodsList>
          <ContactMethod href="tel:0437773667">
            <Phone />
            <span>0437 773 667</span>
          </ContactMethod>
          <ContactMethod href="mailto:admin@reidysrenos.com.au">
            <Mail />
            <span>admin@reidysrenos.com.au</span>
          </ContactMethod>
          <ContactMethod href="https://maps.google.com/maps?q=Karama+NT+0812">
            <MapPin />
            <span>PO Box 177 Karama, Darwin, NT 0802</span>
          </ContactMethod>
          <ContactMethod href="https://www.facebook.com/ReidysRenos">
            <Facebook />
            <span>ReidysRenos</span>
          </ContactMethod>
        </ContactMethodsList>
      </div>
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            required
            id="name"
            label="Name"
          />
          <TextField
            required
            id="name"
            label="Name"
          />
        </div>
        <TextField
          required
          id="email"
          label="Email"
        />
        <TextField
          required
          multiline
          rows={8}
          id="message"
          label="Message"
        />
        <Button style={{ width: '200px' }} type="submit">Send</Button>
      </ContactForm>
    </ContactDetail>

  </ContactWrapper>
}

export default Contact
