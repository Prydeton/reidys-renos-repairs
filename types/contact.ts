// Shared contact-related TypeScript interfaces & types
// Centralizes shapes used by the contact form page and API route.

export interface ContactFormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export interface ContactApiRequestBody extends ContactFormData {
  recaptcha_token: string
}

export interface ContactApiResponse {
  success: boolean
  error?: string
}

// ReCAPTCHA verification response (subset)
export interface RecaptchaVerification {
  success: boolean
  score?: number // v3 only
  action?: string
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

// Convenience type guard helpers (optional usage)
export const isErrorResponse = (r: ContactApiResponse): boolean => !r.success
export const isSuccessResponse = (r: ContactApiResponse): boolean => r.success
