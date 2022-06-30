import Image from 'next/image'

import tableImg from '../../../../public/images/table-01.jpg'
import styles from './styles.module.scss'

export default function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introWrapper}>
        <div className={styles.introContent}>
          <h1>NEVERLAND TABLES</h1>
          <p>Mesas lúdicas para board game. <br />
            Feitas sob medida!
          </p>
          <button type="button">SOLICITAR ORÇAMENTO</button>
        </div>

        <div className={styles.introImg}>
          <Image 
            src={tableImg}
            alt="Mesa para board game"
            layout='fill'
          />
        </div>
      </div>
    </div>
  )
}