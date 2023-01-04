import { createElement } from 'react'
import { createRoot } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { setup } from 'goober'

import { Footer, Header } from './components'
import * as Pages from './pages'
import './style.scss'
// Set up goober to use React
setup(createElement)

const firebaseConfig = {
  apiKey: 'AIzaSyAu44Sk6BJ8VsfZWwAHB-ZmyoH1To0xuTM',
  authDomain: 'reidysrenosrepairs.firebaseapp.com',
  projectId: 'reidysrenosrepairs',
  storageBucket: 'reidysrenosrepairs.appspot.com',
  messagingSenderId: '222572723870',
  appId: '1:222572723870:web:2996e7674f9fc60835058f',
  measurementId: 'G-WV080W7YW7'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
