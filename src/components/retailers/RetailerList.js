import React, { useEffect, useContext } from 'react'
import { DistributorNurseriesContext } from '../distributors/DistributorNurseriesProvider'
import { DistributorContext } from '../distributors/DistributorProvider'
import { FlowerContext } from '../flowers/FlowerProvider'
import { NurseryFlowersContext } from '../nurseries/NurseryFlowersProvider'
import { NurseryContext } from '../nurseries/NurseryProvider'
import { RetailerCard } from './RetailerCard'
import { RetailerContext } from './RetailerProvider'

export const RetailerList = () => {
    const { distributors, getDistributors } = useContext(DistributorContext)
    const { flowers, getFlowers } = useContext(FlowerContext)
    const { retailers, getRetailers } = useContext(RetailerContext)
    const { nurseries, getNurseries } = useContext(NurseryContext)
    const { nurseryFlowers, getNurseryFlowers } = useContext(NurseryFlowersContext)
    const { distributorNurseries, getDistributorNurseries } = useContext(DistributorNurseriesContext)

    useEffect(() => {
        getFlowers()
            .then(getRetailers)
            .then(getNurseries)
            .then(getNurseryFlowers)
            .then(getDistributorNurseries)
            .then(getDistributors)
    }, [])

    return (
        <section className="retailers">
            {
                retailers.map(r => {
                    const localDistributor = distributors.filter(d => d.id === r.distributorId)
                    return <RetailerCard
                        key={r.id}
                        retailer={r}
                        distributor={localDistributor} />
                })
            }
        </section>
    )
}