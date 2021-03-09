import React from 'react'

export const RetailerCard = ({ retailer, distributor, flowers, nurseries }) => {
    return (
        <article className="retailer">
            <h2 className="retailer__name">{retailer.name}</h2>
            <address className="retailer__address">Address: {retailer.address}</address>
            <h3>Flowers</h3>
            {
                flowers.map(f => <p className="retailer__flower">{f.color} - {f.species} - ${(f.price * distributor.markup * retailer.markup).toFixed(2)}</p>)
            }
            <h3>Distributor</h3>
            <p className="retailer__distributor">{distributor.name}</p>
            <h3>Nurseries</h3>
            {
                nurseries.map(n => <p className="retailer__nursery">{n.name}</p>)
            }
        </article>
    )
}