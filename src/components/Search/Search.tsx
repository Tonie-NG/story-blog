import React, { ReactElement } from 'react'
import styles from "./Search.module.css"

function Search(): ReactElement {
  return (
    <form className={styles.search__form} aria-label='form'>
        <input type="text" placeholder="Search by keyword" />
        <button>Search</button>
    </form>
  )
}

export default Search