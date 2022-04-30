import React from 'react'
import Input from '../Input/Input'
import GeoInfo from '../GeoInfo/GeoInfo'
import { GeoInfoConsumer, GeoInfoProvider } from '../../context/GeoInfoContext'
import styles from './Header.module.css'

const Header = () => {
  return (
    <GeoInfoProvider>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>IP Address Tracker</h1>
        <div className={styles.inputWrapper}>
          <Input className={styles.input} />
        </div>
        <GeoInfoConsumer>
          {({ data }) => data && (
            <GeoInfo
              className={styles.geoInfo}
              ipAddress={data.ipAddress}
              location={data.location}
              timezone={data.timezone}
              isp={data.isp}
            />
          )}
        </GeoInfoConsumer>
      </div>
    </GeoInfoProvider>
  )
}

export default Header