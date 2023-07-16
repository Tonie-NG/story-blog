import Link from "next/link"
import React, { ReactElement } from 'react'
import styles from "./Article.module.css"

function Article({ post }: { post:  Record<string, any> }): ReactElement {
  const {created_at,published_at, full_slug, content: {title, excerpt}} = post
  return (
    <div className={styles.article}>
      <h3>{title}</h3>
      <p>
        {excerpt ? excerpt : title}
      </p>
      <span>Published at: {published_at?.split('T')[0] || created_at.split('T')[0]}</span> 
      <Link href={`/${full_slug}`}>Read more</Link>
    </div>
  )
}

export default Article