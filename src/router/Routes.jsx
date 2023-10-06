import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from '../pages/homepage/Home';
import Login from '../pages/homepage/login/Login';
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
]);
export default routes;