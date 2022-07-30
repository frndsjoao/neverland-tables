import Head from 'next/head'
import Footer from '../components/Footer'
import WhatsappIcon from '../components/WhatsappIcon'
import About from './container/About'
import Intro from './container/Intro'
import Products from './container/Products'

import styles from './mainPage.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>NeverLand Table</title>
      </Head>

      <main className={styles.mainContainer}>
        <Intro />
        <About />
        <Products />
        <Footer />
      </main>
      <WhatsappIcon />
    </>
  )
}
