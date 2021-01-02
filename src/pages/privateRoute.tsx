import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import HomeLayout from '../layout/homeLayout/HomeLayout'
import { PrivateRouteProps } from './privateRoute.d'

export const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = ({ component: Component, route, exact, ...rest }) => {
    return <HomeLayout >
        <Route component={(props: RouteComponentProps) => (
            <Suspense fallback={<CircularProgress />}>
                <Component {...props} />
            </Suspense>
        )} path={route} exact={exact} {...rest} />
    </HomeLayout>
}