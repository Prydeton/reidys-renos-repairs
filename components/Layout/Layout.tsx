import { ReactNode } from 'react'
import { Footer, Header } from '@components'

interface LayoutProps {
  children? : ReactNode,
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div id="root">
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
