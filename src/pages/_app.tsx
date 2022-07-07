import { AppProps } from 'next/app'

import Header from '../components/Header'

import "swiper/css/bundle";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
