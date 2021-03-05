import React, { createContext, useState } from 'react'
import { settings } from '../../settings'

export const RetailerContext = createContext()

export const RetailProvider = props => {
    const [retailers, setRetailers] = useState([])

    const getRetailers = () => {
        return fetch(`${settings.api}/retailers`)
            .then(res => res.json())
            .then(setRetailers)
    }

    return (
        <RetailerContext.Provider value={{
            retailers, getRetailers
        }}>
            {props.children}
        </RetailerContext.Provider>
    )
}