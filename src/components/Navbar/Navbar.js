import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import socialIcons from '../../constants/social-icons'
import logo from '../../images/logo.svg'
import * as styles from './Navbar.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(isOpen => !isOpen)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads Logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks
          }
        >
          {links.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
