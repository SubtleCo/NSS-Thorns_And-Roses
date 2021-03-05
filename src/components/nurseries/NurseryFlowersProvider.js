import React, { createContext, useState } from 'react'
import { settings } from '../../settings'

export const NurseryFlowersContext = createContext()

export const NurseryFlowersProvider = props => {
    const [nurseryFlowers, setNurseryFlowers] = useState([])

    const getNurseryFlowers = () => {
        return fetch(`${settings.api}/nurseryFlowers`)
            .then(res => res.json())
            .then(setNurseryFlowers)
    }

    return (
        <NurseryFlowersContext.Provider value={{
            nurseryFlowers, getNurseryFlowers
        }}>
            {props.children}
        </NurseryFlowersContext.Provider>
    )
}