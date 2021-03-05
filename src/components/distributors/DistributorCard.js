import React from 'react'

export const DistributorCard = ({ distributor, flowers, retailers }) => {

    return (
        <article className="distributor card">
            <h3 className="distributor__name">{distributor.name}</h3>
            <div className="distributor__flowers">
                <h4>Flowers:</h4>
                {
                    flowers.map(f => {
                        return (
                            <p key={f.id} className="distributor__flower">{f.species} - {f.color} - ${(f.price * distributor.markup).toFixed(2)}</p>
                        )
                    })
                }
                <h4>Retailers:</h4>
                {
                    retailers.map(r => <p key={r.id} className="distributor__retailer">{r.name}</p>)
                }
            </div>
        </article>
    )
}