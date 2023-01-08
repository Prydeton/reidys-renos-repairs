import { Layout } from '@components'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Reidy's Renos & Repairs in Darwin—more skilled than your average handyman, cheaper than a builder. Tick off your to-do list. Call Andrew: 0437 773 667." />
        <meta name="og:site_name" content="Reidy's Renos and Repairs" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/icon.webp" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
