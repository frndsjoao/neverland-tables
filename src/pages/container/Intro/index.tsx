import Image from 'next/image'

import Button from '../../../components/Button'
import styles from './styles.module.scss'

export default function Intro() {

  return (
    <main id="Home" className={styles.introContainer}>
      <div className={styles.introWrapper}>
        <div className={styles.introContent}>
          <h1>Neverland Tables</h1>
          <h2>Mesas lúdicas para board game.<br />
            Feitas sob medida!
          </h2>

          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5512988130420&text=Olá Bruno! Gostaria de solicitar um orçamento por favor."
            target="_blank" rel="noreferrer"
          >
            <Button
              title="SOLICITAR ORÇAMENTO"
              size="lg"
            />
          </a>


          <div className={styles.introInformations}>
            <div className={styles.introInformationWrapper}>
              <h2>140+</h2>
              <p>Produtos</p>
            </div>
            <div className={styles.divider} />
            <div className={styles.introInformationWrapper}>
              <h2>100+</h2>
              <p>Clientes</p>
            </div>
          </div>

        </div>

        <div className={styles.introImg}>
          <Image
            src={"https://instagram.fplu3-1.fna.fbcdn.net/v/t51.2885-15/293047543_358953209643984_583419481452124202_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fplu3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vhqRuVvbRJUAX9ezrN2&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4MTA4ODI1MjQzOTE2NDk3MA%3D%3D.2-ccb7-5&oh=00_AT-xWpVFyswyPa0rK05i8KYtYckAow_Btgjev_dmdNdP4Q&oe=62EC2D9F&_nc_sid=30a2ef"}
            alt="Mesa para board game"
            layout='fill'
            width={0}
            height={0}
            priority
          />
        </div>
      </div>
    </main>
  )
}