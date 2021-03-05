import React, { createContext, useState } from 'react'
import { settings } from '../../settings'

export const DistributorNurseriesContext = createContext()

export const DistributorNurseriesProvider = props => {
    const [distributorNurseries, setDistributorNurseries] = useState([])

    const getDistributorNurseries = () => {
        return fetch(`${settings.api}/distributorNurseries`)
            .then(res => res.json())
            .then(setDistributorNurseries)
    }

    return (
        <DistributorNurseriesContext.Provider value={{
            distributorNurseries, getDistributorNurseries
        }}>
            {props.children}
        </DistributorNurseriesContext.Provider>
    )
}