import Image from 'next/image'
import { Link } from 'react-scroll'

import logo from '../../../public/logo.png'
import styles from './styles.module.scss'

import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

export default function Footer() {

  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.footerWrapper}>
        <div className={styles.footerLogo}>
          <Image
            src={logo}
            alt="Mesa para board game"
            layout='fill'
            width={0}
            height={0}
            priority
          />
        </div>

        <div className={styles.footerList}>
          <Link to="Home" spy smooth className={styles.linkItem}>Início</Link>
          <Link to="About" spy smooth className={styles.linkItem}>Sobre</Link>
          <Link to="Products" spy smooth className={styles.linkItem}>Produtos</Link>
        </div>


        <div className={styles.footerIcons}>
          <a href="https://www.instagram.com/neverlandtable/" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/Neverland-Table-111527923618494/" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5512988130420&text=Olá Bruno! Gostaria de solicitar um orçamento por favor."
            target="_blank" rel="noreferrer"
          >
            <ImWhatsapp />
          </a>
        </div>
      </nav>
      <span>
        Desenvolvido por <a href='https://joaofernandes.dev/'>João P. Assunção</a>.
      </span>
    </footer>

  )
}