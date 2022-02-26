import React, { useContext, useRef, useState } from 'react'
import cx from 'classnames'
import { GeoInfoContext } from '../../context/GeoInfoContext'
import styles from './Input.module.css'

const Input = ({ placeholder, className }) => {
  const [searchText, setSearchText] = useState('')
  const { search } = useContext(GeoInfoContext)

  const sendRequest = () => {
    search({
      ipAddress: searchText,
      domain: searchText,
    })
  }

  const onEnter = (event) => {
    if (event.key === "Enter") {
      sendRequest()
    }
  }

  const updateSearchText = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onKeyPress={onEnter}
        onChange={updateSearchText}
      />
      <button className={styles.button} onClick={sendRequest}>▶</button>
    </div>
  )
}

export default Input