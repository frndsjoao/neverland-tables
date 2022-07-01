import Image from 'next/image'

import tableImg from '../../../../public/images/table-01.jpg'
import styles from './styles.module.scss'

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactContent}>
          <h1>NEVERLAND TABLES</h1>
          <p>Mesas lúdicas para board game. <br />
            Feitas sob medida!
          </p>
          <button type="button">SOLICITAR ORÇAMENTO</button>
        </div>

        <div className={styles.contactImg}>
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