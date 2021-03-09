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
            .then(getDistributors)
            .then(getNurseries)
            .then(getNurseryFlowers)
            .then(getDistributorNurseries)
            .then(getRetailers)
    }, [])

    return (
        <section className="retailers">
            {
                retailers.map(r => {
                    const distributor = distributors.find(d => d.id === r.distributorId)
                    const nurseryJoins = distributorNurseries.filter(dN => dN.distributorId === distributor.id)
                    const localNurseries = nurseryJoins.map(nJ => {
                        return nurseries.find(n => n.id === nJ.nurseryId)
                    })

                    let flowerJoins = []
                    localNurseries.forEach(nursery => {
                        const relatedFlowerJoins = nurseryFlowers.filter(nF => nF.nurseryId === nursery.id)
                        flowerJoins.push(relatedFlowerJoins)
                    })
                    flowerJoins = flowerJoins.flat()

                    const localFlowers = flowerJoins.map(fJ => {
                        const price = fJ.price
                        const flower = flowers.find(f => f.id === fJ.flowerId)
                        if (flower) flower.price = price
                        return flower
                    })

                    const uniqueFlowers = localFlowers.filter(lF => {
                        const count = localFlowers.filter(lfx => lfx === lF).length
                        if (count < 2) return lF
                    })
                    return <RetailerCard
                        key={r.id}
                        retailer={r}
                        distributor={distributor}
                        flowers={uniqueFlowers}
                        nurseries={localNurseries} />
                })
            }
        </section>
    )
}