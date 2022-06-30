import Image from 'next/image'
import {Link} from 'react-scroll'

import logoImg from '../../../public/logo.png'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <Link to="about" spy smooth><p>SOBRE</p></Link>

          <div className={styles.imageWrapper}>
            <Link to="home" spy smooth>
              <Image src={logoImg} alt="NeverLand" objectFit="cover" layout='fill' />
            </Link>
          </div>
          
        <Link to="contact" spy smooth><p>CONTATO</p></Link>
      </nav>
    </header>
  )
}