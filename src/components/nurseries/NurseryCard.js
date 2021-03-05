import React from 'react'

export const NurseryCard = ({nursery, flowers, nurseryFlowers, distributors}) => {
    return (
        <article className="nursery">
            <h3 className="nursery__name">{nursery.name}</h3>
            <p>Flowers:</p>
            <ul className="nursery__flowers">
                {
                    flowers.map(f => {
                        const thisNurseryFlower = nurseryFlowers.find(nF => nF.flowerId === f.id)
                        const price = thisNurseryFlower.price.toFixed(2)
                        return <li className="nurseryFlower">{f.species} - {f.color} - ${price}</li>
                    })
                }
            </ul>
            <p>Distributors:</p>
            <ul className="nursery__distributors">
                {
                    distributors.map(d => <li className="nurseryDistributor">{d.name}</li>)
                }

            </ul>
        </article>
    )
}