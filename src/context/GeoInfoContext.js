import { createContext, useCallback, useContext, useState } from 'react'
import { getGeoInfo } from '../api'

export const GeoInfoContext = createContext({})

export const GeoInfoProvider = ({ children }) => {
  const [data, setData] = useState(null)

  const search = useCallback(({ ipAddress, domain }) => {
    getGeoInfo({ ipAddress, domain })
      .then(geoInfo => {
        setData(geoInfo)
      })
  }, [])

  return (
    <GeoInfoContext.Provider value={{ data, search }}>
      {children}
    </GeoInfoContext.Provider>
  )
}

export const GeoInfoConsumer = ({ children }) => {
  const { data, search } = useContext(GeoInfoContext)

  return children({ data, search })
}
