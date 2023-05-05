import '@/styles/globals.css'
import { AuthUserProvider } from '@/context/authUserContext'

export default function App({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider> 
}
