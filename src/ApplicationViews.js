import React from 'react'
import { Route } from 'react-router'
import { DistributorNurseriesProvider } from './components/distributors/DistributorNurseriesProvider'
import { DistributorProvider } from './components/distributors/DistributorProvider'
import { FlowerProvider } from './components/flowers/FlowerProvider'
import { Home } from './components/Home'
import { NurseryFlowersProvider } from './components/nurseries/NurseryFlowersProvider'
import { NurseryList } from './components/nurseries/NurseryList'
import { NurseryProvider } from './components/nurseries/NurseryProvider'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <NurseryProvider>
                <NurseryFlowersProvider>
                    <FlowerProvider>
                        <DistributorNurseriesProvider>
                            <DistributorProvider>

                                <Route path="/nurseries">
                                    <NurseryList />
                                </Route>

                            </DistributorProvider>
                        </DistributorNurseriesProvider>
                    </FlowerProvider>
                </NurseryFlowersProvider>
            </NurseryProvider>

            <Route path="/distributors">
                <h2>Distributors, eh?</h2>
            </Route>

            <Route path="/retailers">
                <h2>Retailers, amirite?</h2>
            </Route>
        </>
    )
}