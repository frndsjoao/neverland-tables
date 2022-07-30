import Image from 'next/image'
import { Link } from 'react-scroll'

import logoImg from '../../../public/logo.png'
import styles from './styles.module.scss'

import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import Button from '../Button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.navContainer}>
      <nav className={styles.navWrapper}>
        <h1 className={styles.navLogo}>LOGO</h1>

        <FiMenu
          className={styles.navIconMenu}
          onClick={() => setMenuOpen(true)}
        />

        <div className={menuOpen ? styles.navListActive : styles.navList}>
          {menuOpen ? <FiX className={styles.navIconClose} onClick={() => setMenuOpen(false)} /> : <></>}
          <Link to="Home" spy smooth className={styles.linkItem}>Início</Link>
          <Link to="About" spy smooth className={styles.linkItem}>Sobre</Link>
          <Link to="Products" spy smooth className={`${styles.lastLinkItem} ${styles.linkItem}`}>Produtos</Link>

          <Button outline title='CONTATO' />
        </div>
      </nav>
    </header>

  )
}