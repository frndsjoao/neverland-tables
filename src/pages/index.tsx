import Head from 'next/head'
import About from './container/About'
import Intro from './container/Intro'

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
      </main>
    </>
  )
}
