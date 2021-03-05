import React, { createContext, useState } from 'react'
import { settings } from '../../settings'

export const FlowerContext = createContext()

export const FlowerProvider = props => {
    const [flowers, setFlowers] = useState([])

    const getFlowers = () => {
        return fetch(`${settings.api}/flowers`)
            .then(res => res.json())
            .then(setFlowers)
    }

    return (
        <FlowerContext.Provider value={{
            flowers, getFlowers
        }}>
            {props.children}
        </FlowerContext.Provider>
    )
}