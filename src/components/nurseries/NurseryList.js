import React, { useContext, useEffect } from 'react'
import { DistributorNurseriesContext } from '../distributors/DistributorNurseriesProvider'
import { DistributorContext } from '../distributors/DistributorProvider'
import { FlowerContext } from '../flowers/FlowerProvider'
import { NurseryCard } from './NurseryCard'
import { NurseryFlowersContext } from './NurseryFlowersProvider'
import { NurseryContext } from './NurseryProvider'

export const NurseryList = () => {
    const { nurseries, getNurseries } = useContext(NurseryContext)
    const { nurseryFlowers, getNurseryFlowers } = useContext(NurseryFlowersContext)
    const { flowers, getFlowers } = useContext(FlowerContext)
    const { distributors, getDistributors } = useContext(DistributorContext)
    const { distributorNurseries, getDistributorNurseries } = useContext(DistributorNurseriesContext)

    useEffect(() => {
        getNurseryFlowers()
            .then(getFlowers)
            .then(getDistributorNurseries)
            .then(getDistributors)
            .then(getNurseries)
    }, [])

    return (
        <div className="nurseries">
            <h2 className="nurseries__title">Nurseries</h2>
            {
                nurseries.map(n => {
                    const thisNurserysNurseryFlowers = nurseryFlowers.filter(nF => nF.nurseryId === n.id)
                    const thisNurserysFlowers = thisNurserysNurseryFlowers.map(t => {
                        return flowers.find(f => t.flowerId === f.id)
                    })
                    const thisNurseriesDistributorNurseries = distributorNurseries.filter(dN => dN.nurseryId === n.id)
                    const thisNurseriesDistributors = thisNurseriesDistributorNurseries.map(t => {
                        return distributors.find(d => d.id === t.distributorId)
                    })
                    return <NurseryCard key={NurseryCard.id} nursery={n}
                        flowers={thisNurserysFlowers}
                        nurseryFlowers={thisNurserysNurseryFlowers}
                        distributors={thisNurseriesDistributors} />
                })
            }
        </div>
    )
}