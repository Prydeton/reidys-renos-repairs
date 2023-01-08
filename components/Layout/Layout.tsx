import { ReactNode } from 'react'
import { Footer, Header } from '@components'

interface LayoutProps {
  children? : ReactNode,
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
