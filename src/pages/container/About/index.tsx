import Image from 'next/image'

import { RiMedalLine ,RiShieldCheckLine } from 'react-icons/ri'
import tableImg from '../../../../public/images/table-01.jpg'
import styles from './styles.module.scss'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutBg} />

      <div className={styles.aboutWrapper}>
        <div className={styles.aboutFeatures}>
          <div>
            <RiMedalLine />
            <div className="description">
              <strong>Alta Qualidade</strong>
              <p>dos materiais utilizados</p>
            </div>
          </div>
          <div>
            <RiShieldCheckLine />
            <div className="description">
              <strong>Garantia</strong>
              <p>de 1 ano</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <p>A NeverLand foi criada em Março de 2020, com o prazer de reunir os 
            amigos e passar horas em volta de uma mesa jogando jogos de tabuleiro. 
            De lá até aqui, foram mais de <span>135 mesas</span> produzidas de 
            acordo com a necessidade do cliente, sem contar com estantes e 
            prateleiras para guardar seus jogos.
          </p>

          
        </div>

        {/* <div className={styles.aboutImg}>
          <Image 
            src={tableImg}
            alt="Mesa para board game"
            layout='fill'
          />
        </div> */}
      </div>
    </div>
  )
}