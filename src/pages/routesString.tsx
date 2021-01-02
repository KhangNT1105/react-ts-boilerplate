import { lazy } from "react";


const HOME_PAGE = lazy(() => import('../pages/home/HomePage'));

export const PAGES = {
    HOME_PAGE
}
export const ROUTES_STRING = {
    HOME_PAGE: "/",
}