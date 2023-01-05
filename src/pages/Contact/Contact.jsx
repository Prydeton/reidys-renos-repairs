import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '/src/components'

import { ContactDetail, ContactForm, ContactMethod, ContactMethodsList, ContactWrapper } from './Contact.styles'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [error, setError] = useState()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm()

  const onSubmit = async values => {
    setIsLoading(true)
    setError()
    try {
      // Definitely not a secret API key
      const recaptcha_token = await grecaptcha?.execute('6Ld8adEjAAAAALhpnN6IYGQTEmjXIZDwY9mR-qUG', { action: 'submit' })

      const res = await fetch('https://us-central1-reidysrenosrepairs.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          recaptcha_token,
        })
      })

      const data = await res.json()

      if (data.success) {
        setIsSuccessful(true)
        reset()
      } else {
        if (data.type === 'RECAPTCHA' || !data.error) {
          // Fallback
          window.open(`mailto:admin@reidysrenos.com.au?subject=${encodeURIComponent(
            `Contact message from ${values.name}`
          )}&body=${encodeURIComponent(
            `Email: ${values.email}\n`
            + `Phone Number: ${values.phone}\n`
            + `Message:\n${values.message}`
          )}`, '_blank')
        } else {
          setError(data.error)
        }
      }
    } catch (e) {
      setError(e?.message || e.toString())
    } finally {
      setIsLoading(false)
    }
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
            {...register('name', { required: 'Name is required' })}
          />
          <TextField
            required
            id="phone"
            label="Phone Number"
            {...register('phone', { required: 'Phone number is required' })}
          />
        </div>
        <TextField
          required
          type={'email'}
          id="email"
          label="Email"
          {...register('email', { required: 'Email is required' })}
        />
        <TextField
          required
          multiline
          rows={8}
          id="message"
          label="Message"
          {...register('message', { required: 'Message is required' })}
        />
        {error}
        <Button style={{ width: '200px' }} type="submit">{isLoading ? 'Sending...' : (isSuccessful ? 'Sent!' : 'Send')}</Button>
      </ContactForm>
    </ContactDetail>

  </ContactWrapper>
}

export default Contact
