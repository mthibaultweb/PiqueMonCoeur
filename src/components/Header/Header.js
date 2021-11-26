import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      Cours React
      <ul className={styles.menu}>
        <li>
          <Link to="/profil" className={styles.menuItem}>Profil</Link>
        </li>
        <li>
          <Link to="/feed" className={styles.menuItem}>Feed</Link>
        </li>
        <li>
          <Link to="/jackpot" className={styles.menuItem}>Jackpots</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
