import Link from 'next/link'
import React from 'react'
import styles from "./Nav.module.css"

function Nav () {
  return (
    <nav aria-label="Main Navigation" className={styles.navigation}>
        <div className={styles.logo}>
            <h3>Tonie</h3>
        </div>
        <ul className={styles.menu}>
            <li>
                <Link href="/about" className={styles.link}>About</Link>
            </li>
            <li>
                <Link href={"./contact"}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav