const functions = require('firebase-functions')
const sgMail = require('@sendgrid/mail')
const escape = require('escape-html')
const fetch = require('node-fetch')

const TO_EMAIL = 'admin@reidysrenos.com.au'
const SEND_GRID_KEY = process.env.SEND_GRID_KEY
const RECAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY

sgMail.setApiKey(SEND_GRID_KEY)

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    return res.status(204).send('')
  }

  // Interpret Request
  if (!req.body?.name || !req.body?.phone || !req.body?.email || !req.body?.message) {
    console.warn('Ignored message with missing fields.')
    return res.status(400).json({
      success: false,
      type: 'MISSING_DATA',
      error: 'Missing fields. Please provide "name", "phone number", "email" and "message" fields.',
    })
  }

  // Validate recaptcha token
  const recaptchaData = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: RECAPTCHA_KEY,
      response: req.body?.recaptcha_token,
    }),
  }).then(res => res.json())

  if (!recaptchaData?.success || recaptchaData?.score < 0.5) return res.status(400).json({
    success: false,
    type: 'RECAPTCHA',
    error: `Invalid recaptcha: ${recaptchaData['error-codes'].join(', ')}`,
  })

  // Escape params
  const name = escape(req.body?.name)
  const phone = escape(req.body?.phone)
  const email = escape(req.body?.email)
  const message = escape(req.body?.message)

  // Send email
  try {
    await sgMail.send({
      to: TO_EMAIL,
      from: email,
      replyTo: email,
      subject: `Business inquiry from "${name}"`,
      message: `Phone Number: ${phone}\n\n${message}`
    }, true)

    res.json({ success: true })
  } catch (e) {
    console.error('An error occured sending the email', e)
    res.status(500).json({
      success: false,
      error: e.toString(),
    })
  }
})
