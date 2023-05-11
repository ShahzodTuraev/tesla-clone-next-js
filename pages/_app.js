import '@/styles/globals.css'
import { AuthUserProvider } from '@/context/authUserContext'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return(
    <>
     <Script 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-3C6ZYQKWLX`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3C6ZYQKWLX', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <AuthUserProvider><Component {...pageProps} /></AuthUserProvider> 
    </>
  ) 
}
