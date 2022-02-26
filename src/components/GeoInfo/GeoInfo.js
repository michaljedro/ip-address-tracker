import React from 'react'
import styles from './GeoInfo.module.css'

const GeoInfo = ({
  ipAddress,
  location,
  timezone,
  isp,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.label}>IP Address</div>
        <div className={styles.value}>{ipAddress}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Location</div>
        <div className={styles.value}>{location}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Timezone</div>
        <div className={styles.value}>{timezone}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>ISP</div>
        <div className={styles.value}>{isp}</div>
      </div>
    </div>
  )
}

export default GeoInfo