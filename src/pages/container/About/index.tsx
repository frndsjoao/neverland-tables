import { RiMedalLine, RiShieldCheckLine, RiTruckLine } from 'react-icons/ri'

import Card from '../../../components/Card'
import styles from './styles.module.scss'

export default function About() {
  return (
    <main id="About" className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <h2>Sobre a Neverland</h2>

        <div className={styles.aboutContent}>
          <p>A NeverLand foi criada em Março de 2020, com o prazer de reunir os
            amigos e passar horas em volta de uma mesa jogando jogos de tabuleiro.
            De lá até aqui, foram mais de <span>135 mesas</span> produzidas de
            acordo com a necessidade do cliente, sem contar com estantes e
            prateleiras para guardar seus jogos.
          </p>
        </div>

        <div className={styles.cardWrapper}>
          <Card
            icon={<RiMedalLine />}
            title='Alta Qualidade'
            description='Todos os nossos produtos são fabricados com os 
              materiais de melhor qualidade do mercado.'
          />
          <Card
            icon={<RiTruckLine />}
            title='Envio Seguro'
            description='Enviamos para todo o Brasil e confiamos na qualidade da
              nossa transportadora para entregar seu produto o mais seguro possível.'
          />
          <Card
            icon={<RiShieldCheckLine />}
            title='Garantia e Suporte'
            description='Oferecemos suporte e garantia de 2 anos para todos os 
              produtos fabricados pela Neverland.'
          />
        </div>
      </div>
    </main>
  )
}