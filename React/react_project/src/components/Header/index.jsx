import React from 'react'
import styles from './Header.module.css'


const Header = ({  username }) => {
  //const { address, name } = props;
  return (
    <header className={styles.header}>
      <img className={styles.avatar} src={`https://github.com/${username}.png`}/>
      <h1 className={styles.name}>
        {username}
      </h1>
    </header>
  )
}

export default Header