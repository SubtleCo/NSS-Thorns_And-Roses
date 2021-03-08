import React from 'react'

export const RetailerCard = ({ retailer, distributor }) => {
    return (
        <article className="retailer">
            <h2 className="retailer__name">{retailer.name}</h2>
            <address className="retailer__address">Address: {retailer.address}</address>
            <h3>Flowers</h3>
            <h3>Distributor</h3>
            <p className="retailer__distributor">{distributor.name}</p>
            <h3>Nurseries</h3>
        </article>
    )
}