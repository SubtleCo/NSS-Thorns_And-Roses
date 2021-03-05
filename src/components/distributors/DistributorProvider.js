import React, { createContext, useState } from 'react'
import { settings } from '../../settings'

export const DistributorContext = createContext()

export const DistributorProvider = props => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        return fetch(`${settings.api}/distributors`)
            .then(res => res.json())
            .then(setDistributors)
    }

    return (
        <DistributorContext.Provider value={{
            distributors, getDistributors
        }}>
            {props.children}
        </DistributorContext.Provider>
    )
}