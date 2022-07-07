import Head from 'next/head'
import InstagramFeed from '../components/InstagramFeed'
import About from './container/About'
import Feedbacks from './container/Feedbacks'
import Contact from './container/Contact'
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
        {/* <InstagramFeed /> */}
        <Feedbacks />
        <Contact />
      </main>
    </>
  )
}
