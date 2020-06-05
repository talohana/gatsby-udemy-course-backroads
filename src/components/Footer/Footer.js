import { Link } from 'gatsby'
import React from 'react'
import links from '../../constants/links'
import socialIcons from '../../constants/social-icons'
import styles from '../Footer/Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, i) => (
          <Link key={i} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, i) => (
          <a key={i} to={item.url} target="_blank">
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroad travel company {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
