import React from 'react'
import styles from './GeoInfo.module.css'
import cx from 'classnames'

const GeoInfo = ({
  ipAddress,
  location,
  timezone,
  isp,
  className,
}) => {
  return (
    <div className={cx(styles.wrapper, className)}>
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
