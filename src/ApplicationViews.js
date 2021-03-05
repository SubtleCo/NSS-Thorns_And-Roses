import React from 'react'
import { Route } from 'react-router'
import { Home } from './components/Home'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/nurseries">
                <h2>Nurseries, innit?</h2>
            </Route>
            <Route path="/distributors">
                <h2>Distributors, eh?</h2>
            </Route>
            <Route path="/retailers">
                <h2>Retailers, amirite?</h2>
            </Route>
        </>
    )
}