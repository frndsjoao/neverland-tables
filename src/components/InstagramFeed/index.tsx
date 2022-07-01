// import styles from './styles.module.scss'

// export default function InstagramFeed() {
//   return (
//     <div className={styles.instagramBox}>
//       <script src="https://apps.elfsight.com/p/platform.js" defer></script>
//       <div className="elfsight-app-96aadede-d4f9-4ba8-ad33-d7e377e4e65c"></div>
//     </div>
//   )
// }

import InstagramFeed  from 'react-ig-feed'

import 'react-ig-feed/dist/index.css'



export default function InstagramFeed() {
  return (
    <InstagramFeed token="IGQVJWbGZAkZAm1Wc2Q2OU1EMFotQUZAYcV91dnRZAOTlJTzBtd3JJenZAqdGNoRTZASUU9hbWJEeTN5VTUtUGF0emVuYkwwQkdwZA19TS2c1THd4LXpjQzkwdUhGclVlWjB0cEs0OV83OXl0U2hubHUxUFF3TwZDZD" counter="6" />
  )
}