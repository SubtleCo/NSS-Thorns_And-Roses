import React, { useContext, useEffect } from 'react'
import { FlowerContext } from '../flowers/FlowerProvider'
import { NurseryFlowersContext } from '../nurseries/NurseryFlowersProvider'
import { NurseryContext } from '../nurseries/NurseryProvider'
import { RetailerContext } from '../retailers/RetailerProvider'
import { DistributorCard } from './DistributorCard'
import { DistributorNurseriesContext } from './DistributorNurseriesProvider'
import { DistributorContext } from './DistributorProvider'

export const DistributorList = () => {
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
        <section className="distributors">
            {
                distributors.map(distributor => {
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

                    const localRetailers = retailers.filter(r => r.distributorId === distributor.id)
                    return <DistributorCard key={distributor.id} distributor={distributor} flowers={localFlowers} retailers={localRetailers} />
                })
            }
        </section>
    )
}