import type { NextApiRequest, NextApiResponse } from 'next'
import type { ContactApiRequestBody, ContactApiResponse, RecaptchaVerification } from '../../types/contact'

const isEmail = (val: string) => /.+@.+\..+/.test(val)

const verifyRecaptcha = async (token: string): Promise<RecaptchaVerification> => {
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
  if (!RECAPTCHA_SECRET_KEY) {
    throw new Error('Missing RECAPTCHA_SECRET_KEY')
  }

  const recaptchaData: RecaptchaVerification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  }).then(res => res.json())

  return recaptchaData
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactApiResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, phone, email, subject, message, recaptcha_token } = req.body as ContactApiRequestBody

  if (!name || !phone || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  if (!isEmail(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email' })
  }

  if (!recaptcha_token) {
    return res.status(400).json({ success: false, error: 'Missing recaptcha token' })
  }
  const verifyRecaptchaRes = await verifyRecaptcha(recaptcha_token)
  if (!verifyRecaptchaRes.success || (typeof verifyRecaptchaRes.score === 'number' && verifyRecaptchaRes.score < 0.5)) {
    return res.status(400).json({ success: false, error: 'Recaptcha failed' })
  }

  const toEmail = 'admin@reidysrenos.com.au'
  const fromEmail = 'admin@reidysrenos.com.au'
  const fromName = `Inquiry - ${name}`
  const BREVO_API_KEY = process.env.BREVO_API_KEY

  if (!BREVO_API_KEY) {
    return res.status(500).json({ success: false, error: 'Email service not configured' })
  }

  try {
    const SibApiV3Sdk = require('@getbrevo/brevo')
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    apiInstance.authentications['apiKey'].apiKey = BREVO_API_KEY

    const htmlContent = `
			<p><strong>Name:</strong> ${String(name)}</p>
			<p><strong>Email:</strong> ${String(email)}</p>
			<p><strong>Phone:</strong> ${String(phone)}</p>
			<p><strong>Subject:</strong> ${String(subject)}</p>
			<p><strong>Message:</strong></p>
			<pre style="white-space:pre-wrap;font-family:inherit">${String(message)}</pre>
		`

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
    sendSmtpEmail.sender = { email: fromEmail, name: fromName }
    sendSmtpEmail.to = [{ email: toEmail, name: 'Reidys Renos & Repairs' }]
    sendSmtpEmail.replyTo = { email, name }
    sendSmtpEmail.subject = subject
    sendSmtpEmail.htmlContent = htmlContent

    await apiInstance.sendTransacEmail(sendSmtpEmail)

    return res.status(200).json({ success: true })
  } catch (e: any) {
    console.error('Brevo send error:', e?.message || e)
    return res.status(500).json({ success: false, error: 'Failed to send email' })
  }
}
