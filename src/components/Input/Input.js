import React from 'react'
import styles from './Input.module.css'

const Input = ({
  placeholder,
  onChange,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} onClick={onClick} />
      <button className={styles.button} onClick={onClick}>▶</button>
    </div>
  )
}

export default Input