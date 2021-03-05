import React, { createContext, useState } from 'react'
import { settings } from '../../settings'

export const NurseryContext = createContext()

export const NurseryProvider = props => {
    const [nurseries, setNurseries] = useState([])

    const getNurseries = () => {
        return fetch(`${settings.api}/nurseries`)
            .then(res => res.json())
            .then(setNurseries)
    }

    const getNurseryById = id => {
        return fetch(`${settings.api}/nurseries/${id}`)
            .then(res => res.json())
    }

    return (
        <NurseryContext.Provider value={{
            nurseries, getNurseries, getNurseryById
        }}>
            {props.children}
        </NurseryContext.Provider>
    )
}