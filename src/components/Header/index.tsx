import Image from 'next/image'
import { Link } from 'react-scroll'

import logo from '../../../public/logo.png'
import styles from './styles.module.scss'

import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import Button from '../Button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.navContainer}>
      <nav className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <Image
            src={logo}
            alt="Mesa para board game"
            layout='fill'
            width={0}
            height={0}
            priority
          />
        </div>

        <FiMenu
          className={styles.navIconMenu}
          onClick={() => setMenuOpen(true)}
        />

        <div className={menuOpen ? styles.navListActive : styles.navList}>
          {menuOpen ? <FiX className={styles.navIconClose} onClick={() => setMenuOpen(false)} /> : <></>}
          <Link to="Home" spy smooth className={styles.linkItem}>Início</Link>
          <Link to="About" spy smooth className={styles.linkItem}>Sobre</Link>
          <Link to="Products" spy smooth className={`${styles.lastLinkItem} ${styles.linkItem}`}>Produtos</Link>

          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5512988130420&text=Olá Bruno! Gostaria de solicitar um orçamento por favor."
            target="_blank" rel="noreferrer"
          >
            <Button outline title='CONTATO' />
          </a>
        </div>
      </nav>
    </header>

  )
}