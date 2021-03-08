import React from 'react'
import { Route } from 'react-router'
import { DistributorList } from './components/distributors/DistributorList'
import { DistributorNurseriesProvider } from './components/distributors/DistributorNurseriesProvider'
import { DistributorProvider } from './components/distributors/DistributorProvider'
import { FlowerProvider } from './components/flowers/FlowerProvider'
import { Home } from './components/Home'
import { NurseryFlowersProvider } from './components/nurseries/NurseryFlowersProvider'
import { NurseryList } from './components/nurseries/NurseryList'
import { NurseryProvider } from './components/nurseries/NurseryProvider'
import { RetailerList } from './components/retailers/RetailerList'
import { RetailProvider } from './components/retailers/RetailerProvider'

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
                                <RetailProvider>

                                    <Route path="/nurseries">
                                        <NurseryList />
                                    </Route>

                                    <Route path="/distributors">
                                        <DistributorList />
                                    </Route>

                                    <Route path="/retailers">
                                        <RetailerList />
                                    </Route>

                                </RetailProvider>
                            </DistributorProvider>
                        </DistributorNurseriesProvider>
                    </FlowerProvider>
                </NurseryFlowersProvider>
            </NurseryProvider>
        </>
    )
}