import React, { ReactElement } from 'react'
import styles from './Blog.module.css'

function index(): ReactElement {
  return (
    <div className={styles.blog}>
        <h2>Title if the  blog</h2>
        <span>Publisedh at</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi minima velit labore hic. Doloribus dolores quasi animi rem dolorem nostrum, sit quod odio architecto provident ex necessitatibus, eaque minima cupiditate temporibus unde voluptas nulla porro, velit quisquam voluptatum deleniti! Temporibus, sint sed delectus eius maxime exercitationem aspernatur perspiciatis necessitatibus similique?</p>
    </div>
  )
}

export default index