import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../component/ErrorBoundary';
import { PrivateRoute } from './privateRoute';
import { PAGES, ROUTES_STRING } from './routesString';
const routes: React.FC = () => {
    return <BrowserRouter>
        <ErrorBoundary>
            <PrivateRoute route={ROUTES_STRING.HOME_PAGE} component={PAGES.HOME_PAGE} />
        </ErrorBoundary>
    </BrowserRouter>;
}
export default routes;